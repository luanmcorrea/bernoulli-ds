import { CaretDownIcon, XCircleIcon, MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react"
import { Combobox as MultiselectPrimitive } from "@base-ui/react/combobox"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"
import { debounce } from "@/lib/debounce"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

function sanitizeValues(
  arr?: ReadonlyArray<string | null | undefined>,
): string[] {
  return (arr ?? []).filter(
    (v): v is string => typeof v === "string" && v !== "",
  )
}

type MultiselectContextType = {
  open: boolean
  selectedValues: string[]
  setSelectedValues: (values: string[]) => void
  items: Map<string, ReactNode>
  registerItem: (value: string, label: ReactNode) => void
  single: boolean
  inputValue: string
}

const MultiselectContext = createContext<MultiselectContextType | null>(null)

function useMultiselectContext() {
  const ctx = useContext(MultiselectContext)
  if (ctx == null) {
    throw new Error("useMultiselectContext must be used within a Multiselect")
  }
  return ctx
}

function Multiselect({
  children, values, defaultValues, onValuesChange, single = false,
}: {
  children: ReactNode
  values?: ReadonlyArray<string | null | undefined>
  defaultValues?: ReadonlyArray<string | null | undefined>
  onValuesChange?: (values: string[]) => void
  single?: boolean
  items?: readonly unknown[]
}) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [internalValues, setInternalValues] = useState<string[]>(() =>
    sanitizeValues(values ?? defaultValues),
  )
  const selectedValues = useMemo(
    () => (values ? sanitizeValues(values) : internalValues),
    [values, internalValues],
  )
  const [items, setItems] = useState<Map<string, ReactNode>>(new Map())

  const registerItem = useCallback((value: string, label: ReactNode) => {
    setItems(prev => {
      if (prev.get(value) === label) return prev
      return new Map(prev).set(value, label)
    })
  }, [])

  const setSelectedValues = useCallback(
    (next: string[]) => {
      if (values === undefined) setInternalValues(next)
      onValuesChange?.(next)
    },
    [values, onValuesChange],
  )

  const itemValues = useMemo(() => Array.from(items.keys()), [items])

  const itemToStringLabel = useCallback((value: string) => {
      const label = items.get(value)
      return typeof label === "string" ? label : String(value)
    },
    [items],
  )

  const contextValue = useMemo(
    () => ({
      open,
      selectedValues,
      setSelectedValues,
      items,
      registerItem,
      single,
      inputValue,
    }),
    [open, selectedValues, setSelectedValues, items, registerItem, single, inputValue],
  )

  return (
    <MultiselectContext value={contextValue}>
      <MultiselectPrimitive.Root
        multiple={!single}
        autoHighlight
        open={open}
        onOpenChange={setOpen}
        items={itemValues}
        inputValue={inputValue}
        onInputValueChange={setInputValue}
        itemToStringLabel={itemToStringLabel}
        value={single ? (selectedValues[0] ?? null) : selectedValues}
        onValueChange={(next: string | string[] | null) => {
          if (single) {
            setSelectedValues(next == null ? [] : [next as string])
          } else {
            setSelectedValues((next as string[]) ?? [])
          }
        }}
      >
        {children}
      </MultiselectPrimitive.Root>
    </MultiselectContext>
  )
}

function MultiselectTrigger({ className, size = "default", children, ...props }: MultiselectPrimitive.Trigger.Props & {
  size?: "sm" | "default" | "lg"
}) {
  const { selectedValues, setSelectedValues } = useMultiselectContext()
  const hasValues = selectedValues.length > 0

  return (
    <MultiselectPrimitive.Trigger
      data-slot="multiselect-trigger"
      data-size={size}
      className={cn(
        "group/multiselect-trigger flex w-fit items-center gap-1.5 rounded-3xl border bg-input px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow,background] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-10 data-[size=sm]:h-8 data-[size=lg]:h-12 data-[size=lg]:text-xl data-[size=lg]:px-4 dark:aria-invalid:ring-destructive/40 [&>svg:not([class*='size-'])]:size-4 data-[size=lg]:[&>svg:not([class*='size-'])]:size-5",
        className,
      )}
      {...props}
    >
      {children}
      {hasValues && (
        <Button
          variant="ghost-neutral" size="icon-xs"
          className="ml-auto -mr-1 rounded-full group-disabled/multiselect-trigger:hidden text-muted-foreground"
          onClick={e => {
            e.stopPropagation()
            setSelectedValues([])
          }}
        >
          <XIcon className="pointer-events-none size-4" />
        </Button>
      )}
      <MultiselectPrimitive.Icon
        render={
          <CaretDownIcon className="pointer-events-none shrink-0 size-4 ml-auto text-primary transition-transform duration-200 group-data-popup-open/multiselect-trigger:rotate-180" />
        }
      />
    </MultiselectPrimitive.Trigger>
  )
}

function MultiselectValue({
  placeholder, clickToRemove = true, className, overflowBehavior = "cutoff", ...props
}: {
  placeholder?: string
  clickToRemove?: boolean
  overflowBehavior?: "wrap" | "wrap-when-open" | "cutoff"
} & Omit<ComponentPropsWithoutRef<"div">, "children">) {
  const { selectedValues, setSelectedValues, items, open, single } = useMultiselectContext()
  const [overflowAmount, setOverflowAmount] = useState(0)
  const valueRef = useRef<HTMLDivElement>(null)
  const overflowRef = useRef<HTMLDivElement>(null)

  const shouldWrap = overflowBehavior === "wrap" || (overflowBehavior === "wrap-when-open" && open)

  const checkOverflow = useCallback(() => {
    const containerElement = valueRef.current
    if (containerElement == null) return

    const overflowElement = overflowRef.current
    const itemElements = containerElement.querySelectorAll<HTMLElement>(
      "[data-selected-item]",
    )

    if (overflowElement != null) overflowElement.style.display = "none"
    itemElements.forEach(child => child.style.removeProperty("display"))
    let amount = 0
    for (let i = itemElements.length - 1; i >= 0; i--) {
      const child = itemElements[i]!
      if (containerElement.scrollWidth <= containerElement.clientWidth) {
        break
      }
      amount = itemElements.length - i
      child.style.display = "none"
      overflowElement?.style.removeProperty("display")
    }
    setOverflowAmount(prev => (prev === amount ? prev : amount))
  }, [])

  const observerRef = useRef<ResizeObserver | null>(null)
  const setContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      observerRef.current?.disconnect()
      observerRef.current = null
      valueRef.current = node
      if (node == null || shouldWrap) return
      const observer = new ResizeObserver(debounce(checkOverflow, 100))
      observer.observe(node)
      observerRef.current = observer
      checkOverflow()
    },
    [shouldWrap, checkOverflow],
  )

  useEffect(() => {
    if (shouldWrap) {
      setOverflowAmount(0)
      return
    }
    checkOverflow()
  }, [selectedValues, items, shouldWrap, checkOverflow])

  if (selectedValues.length === 0 && placeholder) {
    return (
      <span className="min-w-0 overflow-hidden font-normal text-muted-foreground">{placeholder}</span>
    )
  }

  if (single && selectedValues.length > 0) {
    return (
      <span className="min-w-0 overflow-hidden">{items.get(selectedValues[0]!)}</span>
    )
  }

  return (
    <div
      {...props}
      ref={setContainerRef}
      className={cn(
        "flex w-full gap-1 overflow-hidden",
        shouldWrap && "h-full flex-wrap",
        className,
      )}
    >
      {selectedValues
        .filter(value => items.has(value))
        .map(value => (
          <Badge
            variant="secondary"
            data-selected-item
            key={value}  
          >
            <span className="max-w-26 truncate">{items.get(value)}</span>
            {clickToRemove && (
              <Button 
                data-slot="multiselect-value-remove"
                variant="ghost" size="icon-xs"
                className="-ml-1 -mr-2 text-inherit! group-disabled/multiselect-trigger:hidden"
                onClick={
                  clickToRemove ? e => {
                    e.stopPropagation()
                    setSelectedValues(
                      selectedValues.filter(v => v !== value),
                    )
                  } : undefined
                }
              >
                <XCircleIcon className="pointer-events-none" />
              </Button>
            )}
          </Badge>
        ))}
      <Badge
        style={{ display: overflowAmount > 0 && !shouldWrap ? "block" : "none", }}
        variant="secondary-neutral"
        className="px-1.5"
        ref={overflowRef}
      >
        +{overflowAmount}
      </Badge>
    </div>
  )
}

function MultiselectContent({
  className,
  search = false,
  selectAll = false,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  ...props
}: MultiselectPrimitive.Popup.Props &
  Pick<
    MultiselectPrimitive.Positioner.Props,
    "side" | "sideOffset" | "align" | "alignOffset"
  > & {
    search?: boolean | { placeholder?: string; emptyMessage?: string }
    selectAll?: boolean | { label?: ReactNode }
  }) {
  const canSearch = typeof search === "object" ? true : search
  const searchPlaceholder = typeof search === "object" ? search.placeholder : "Search"
  const emptyMessage = typeof search === "object" ? search.emptyMessage : undefined
  const showSelectAll = typeof selectAll === "object" ? true : selectAll
  const selectAllLabel = typeof selectAll === "object" ? selectAll.label : "Select all"

  return (
    <MultiselectPrimitive.Portal keepMounted>
      <MultiselectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <MultiselectPrimitive.Popup
          data-slot="multiselect-content"
          className={cn(
            "group/multiselect-content relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className,
          )}
          {...props}
        >
          {canSearch && (
            <InputGroup size="sm" className="w-auto mx-2 mt-2 flex items-center">
              <InputGroupAddon >
                <MagnifyingGlassIcon />
              </InputGroupAddon>
              <MultiselectPrimitive.Input
                  render={<InputGroupInput />}
                  placeholder={searchPlaceholder}
                />
            </InputGroup>
          )}
          <MultiselectPrimitive.List
            data-slot="multiselect-list"
            className="max-h-[min(calc(var(--available-height)---spacing(9)))] scroll-py-1.5 overflow-y-auto overscroll-contain p-1.5"
          >
            {showSelectAll && <MultiselectSelectAll>{selectAllLabel}</MultiselectSelectAll>}
            {children}
          </MultiselectPrimitive.List>
          {canSearch && (
            <MultiselectPrimitive.Empty
              data-slot="multiselect-empty"
              className="hidden w-full justify-center pb-3 text-center text-sm text-muted-foreground group-data-empty/multiselect-content:flex"
            >
              {emptyMessage}
            </MultiselectPrimitive.Empty>
          )}
        </MultiselectPrimitive.Popup>
      </MultiselectPrimitive.Positioner>
    </MultiselectPrimitive.Portal>
  )
}

function MultiselectSelectAll({ className, children, ...props }: Omit<ComponentPropsWithoutRef<"div">, "onClick">) {
  const { items, selectedValues, setSelectedValues, inputValue } = useMultiselectContext()
  const allValues = useMemo(() => Array.from(items.keys()), [items])
  const selectedCount = allValues.filter(v => selectedValues.includes(v)).length
  const allSelected = allValues.length > 0 && selectedCount === allValues.length
  const someSelected = selectedCount > 0 && !allSelected
  const checkedState: boolean | "indeterminate" = allSelected
    ? true
    : someSelected
      ? "indeterminate"
      : false

  if (inputValue.trim() !== "") return null

  return (
    <div
      {...props}
      data-slot="multiselect-select-all"
      role="option"
      aria-selected={allSelected}
      aria-checked={someSelected ? "mixed" : allSelected}
      onPointerDown={e => {
        e.preventDefault()
        e.stopPropagation()
        setSelectedValues(allSelected ? [] : allValues)
      }}
      className={cn(
        "relative flex w-full cursor-default items-center gap-2.5 rounded-2xl py-2 pl-9 pr-3 text-sm font-medium outline-hidden select-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground active:scale-97 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
        className,
      )}
    >
      <Checkbox
        checked={checkedState}
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute left-2.5"
      />
      {children}
    </div>
  )
}

function MultiselectItem({
  className,
  value,
  badgeLabel,
  children,
  ...props
}: Omit<MultiselectPrimitive.Item.Props, "value"> & {
  value: string | null | undefined
  badgeLabel?: ReactNode
}) {
  const { registerItem, inputValue, selectedValues } = useMultiselectContext()
  const safeValue = value ?? ""
  const isUsable = value != null && value !== ""
  const isSelected = isUsable && selectedValues.includes(safeValue)

  const childrenString = typeof children === "string" ? children : ""

  useEffect(() => {
    if (!isUsable) return
    registerItem(safeValue, badgeLabel ?? children)
    // childrenString tracked in deps to capture string-children changes,
    // while ignoring identity churn from JSX children
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUsable, safeValue, badgeLabel, childrenString, registerItem])

  const labelText = useMemo(
    () =>
      typeof badgeLabel === "string"
        ? badgeLabel
        : typeof children === "string"
          ? children
          : safeValue,
    [badgeLabel, children, safeValue],
  )

  const matchesQuery = useMemo(() => {
    const query = inputValue.trim().toLowerCase()
    return query === "" || labelText.toLowerCase().includes(query)
  }, [labelText, inputValue])

  if (!isUsable) return null
  if (!matchesQuery) return null

  return (
    <MultiselectPrimitive.Item
      value={safeValue}
      data-slot="multiselect-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2.5 rounded-2xl py-2 pl-9 pr-3 text-sm font-medium outline-hidden select-none transition-all duration-100 ease-out active:scale-97 data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive] data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <Checkbox
        checked={isSelected} tabIndex={-1} aria-hidden
        className="pointer-events-none absolute left-2.5"
      />
      {children}
    </MultiselectPrimitive.Item>
  )
}

function MultiselectGroup({ className, ...props }: MultiselectPrimitive.Group.Props) {
  return (
    <MultiselectPrimitive.Group
      data-slot="multiselect-group" className={cn(className)}
      {...props}
    />
  )
}

function MultiselectLabel({ className, ...props }: MultiselectPrimitive.GroupLabel.Props) {
  return (
    <MultiselectPrimitive.GroupLabel
      data-slot="multiselect-label" className={cn("px-3 py-2.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function MultiselectSeparator({ className, ...props }: MultiselectPrimitive.Separator.Props) {
  return (
    <MultiselectPrimitive.Separator
      data-slot="multiselect-separator" className={cn("-mx-1.5 my-1.5 h-px bg-border", className)}
      {...props}
    />
  )
}

export {
  Multiselect,
  MultiselectTrigger,
  MultiselectValue,
  MultiselectContent,
  MultiselectItem,
  MultiselectGroup,
  MultiselectLabel,
  MultiselectSeparator,
}
