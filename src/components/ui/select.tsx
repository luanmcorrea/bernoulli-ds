import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  type ComponentProps,
  type ReactNode,
} from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"

import { cn } from "@/lib/utils"
import { CaretDownIcon, CheckIcon, CaretUpIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

type SelectContextType = {
  inputValue: string
  setInputValue: (value: string) => void
  registerVisibility: (id: string, visible: boolean) => void
  firstVisibleId: string | null
}

const SelectContext = createContext<SelectContextType | null>(null)

function useSelectContext() {
  const ctx = useContext(SelectContext)
  if (ctx == null) {
    throw new Error("useSelectContext must be used within a Select")
  }
  return ctx
}

function Select<Value, Multiple extends boolean | undefined = false>({
  onOpenChange,
  ...props
}: SelectPrimitive.Root.Props<Value, Multiple>) {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState<Map<string, boolean>>(() => new Map())

  const registerVisibility = useCallback((id: string, visible: boolean) => {
    setItems(prev => {
      if (prev.get(id) === visible) return prev
      const next = new Map(prev)
      next.set(id, visible)
      return next
    })
  }, [])

  // Map preserves insertion (= mount/DOM) order, so the first visible
  // entry in iteration is the first match in the rendered list.
  const firstVisibleId = useMemo(() => {
    for (const [id, visible] of items) {
      if (visible) return id
    }
    return null
  }, [items])

  const contextValue = useMemo(
    () => ({ inputValue, setInputValue, registerVisibility, firstVisibleId }),
    [inputValue, registerVisibility, firstVisibleId],
  )

  return (
    <SelectContext value={contextValue}>
      <SelectPrimitive.Root
        onOpenChange={(open, eventDetails) => {
          if (!open) setInputValue("")
          onOpenChange?.(open, eventDetails)
        }}
        {...props}
      />
    </SelectContext>
  )
}

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1.5 p-1.5", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left", className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default" | "lg"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "group/select-trigger flex w-fit items-center justify-between gap-1.5 rounded-3xl border bg-input px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow,background-color] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 disabled:bg-muted aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-10 data-[size=sm]:h-8 data-[size=lg]:h-12 data-[size=lg]:text-xl data-[size=lg]:p-4 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[size=lg]:[&_svg:not([class*='size-'])]:size-5",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <Button variant="ghost" size="icon-xs" className="-mx-1 rounded-full">
            <CaretDownIcon className="pointer-events-none size-4 transition-transform duration-200 group-data-popup-open/select-trigger:rotate-180" />
          </Button>
        }
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = false,
  search = false,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  > & {
    search?: boolean | { placeholder?: string; emptyMessage?: string }
  }) {
  const searchConfig = typeof search === "object" ? search : (search ? {} : null)
  const canSearch = searchConfig != null
  const searchPlaceholder = searchConfig?.placeholder ?? "Search"
  const emptyMessage = searchConfig?.emptyMessage

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn("group/select-content relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", canSearch ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto", className )}
          {...props}
        >
          {canSearch && <SelectSearchInput placeholder={searchPlaceholder} />}
          {!canSearch && <SelectScrollUpButton />}
          <SelectPrimitive.List
            className={cn(
              canSearch && "max-h-[min(calc(var(--available-height)---spacing(9)))] scroll-py-1.5 overflow-y-auto overscroll-contain",
            )}
          >
            {children}
            {canSearch && <SelectEmpty>{emptyMessage}</SelectEmpty>}
          </SelectPrimitive.List>
          {!canSearch && <SelectScrollDownButton />}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectSearchInput({ placeholder }: { placeholder?: string }) {
  const { inputValue, setInputValue } = useSelectContext()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const input = inputRef.current
    if (input == null) return

    const focusInput = () => input.focus({ preventScroll: true })
    const rafId = requestAnimationFrame(focusInput)

    const popup = input.closest<HTMLElement>('[data-slot="select-content"]')
    if (popup == null) {
      return () => cancelAnimationFrame(rafId)
    }

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null
      if (target === input) return
      if (target != null && popup.contains(target)) {
        focusInput()
      }
    }

    popup.addEventListener("focusin", handleFocusIn)
    return () => {
      cancelAnimationFrame(rafId)
      popup.removeEventListener("focusin", handleFocusIn)
    }
  }, [])

  return (
    <InputGroup className="w-auto mx-2 mt-2 h-8 flex items-center">
      <InputGroupAddon>
        <MagnifyingGlassIcon />
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        value={inputValue}
        placeholder={placeholder}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            const popup = e.currentTarget.closest<HTMLElement>('[data-slot="select-content"]')
            const firstItem = popup?.querySelector<HTMLElement>('[data-slot="select-item"]')
            if (firstItem) {
              e.preventDefault()
              e.stopPropagation()
              firstItem.click()
            }
            return
          }
          if (e.key !== "Escape" && e.key !== "ArrowDown" && e.key !== "ArrowUp") {
            e.stopPropagation()
          }
        }}
      />
    </InputGroup>
  )
}

function SelectEmpty({ children }: { children?: ReactNode }) {
  const { inputValue, firstVisibleId } = useSelectContext()
  if (inputValue.trim() === "" || children == null || firstVisibleId != null) return null
  return (
    <div
      data-slot="select-empty"
      className="flex w-full justify-center pb-3 text-center text-sm text-muted-foreground"
    >
      {children}
    </div>
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-3 py-2.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  value,
  ...props
}: SelectPrimitive.Item.Props) {
  const { inputValue, registerVisibility, firstVisibleId } = useSelectContext()

  const labelText = typeof children === "string" ? children : ""
  const query = inputValue.trim().toLowerCase()
  const matchesQuery = query === "" || labelText.toLowerCase().includes(query)

  const id = String(value ?? labelText)

  useEffect(() => {
    registerVisibility(id, matchesQuery)
    return () => registerVisibility(id, false)
  }, [id, matchesQuery, registerVisibility])

  if (!matchesQuery) return null

  const isAutoHighlighted = query !== "" && firstVisibleId === id

  return (
    <SelectPrimitive.Item
      value={value}
      data-slot="select-item"
      data-auto-highlighted={isAutoHighlighted ? "" : undefined}
      className={cn(
        "relative flex w-full cursor-default items-center gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium outline-hidden select-none transition-all duration-300 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-auto-highlighted:bg-accent data-auto-highlighted:text-accent-foreground active:scale-96 not-data-[variant=destructive]:focus:[&_*:not([data-slot=avatar-fallback])]:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 items-center whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "pointer-events-none -mx-1.5 my-1.5 h-px bg-border",
        className
      )}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <CaretUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <CaretDownIcon
      />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
