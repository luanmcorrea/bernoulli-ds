"use client"

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
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import {
  CaretDownIcon,
  CheckIcon,
  CaretUpIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

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

function Select({
  onOpenChange,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState<Map<string, boolean>>(() => new Map())

  const registerVisibility = useCallback((id: string, visible: boolean) => {
    setItems((prev) => {
      if (prev.get(id) === visible) return prev
      const next = new Map(prev)
      next.set(id, visible)
      return next
    })
  }, [])

  const firstVisibleId = useMemo(() => {
    for (const [id, visible] of items) {
      if (visible) return id
    }
    return null
  }, [items])

  const contextValue = useMemo(
    () => ({ inputValue, setInputValue, registerVisibility, firstVisibleId }),
    [inputValue, registerVisibility, firstVisibleId]
  )

  return (
    <SelectContext.Provider value={contextValue}>
      <SelectPrimitive.Root
        data-slot="select"
        onOpenChange={(open) => {
          if (!open) setInputValue("")
          onOpenChange?.(open)
        }}
        {...props}
      />
    </SelectContext.Provider>
  )
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1.5 p-1.5", className)}
      {...props}
    />
  )
}

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
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
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default" | "lg"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "group/select-trigger flex w-fit items-center justify-between gap-1.5 rounded-3xl border bg-input px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow,background-color] outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring focus-visible:ring-2   disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 disabled:bg-muted aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-10 data-[size=sm]:h-8 data-[size=lg]:h-12 data-[size=lg]:text-xl data-[size=lg]:p-4 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[size=lg]:[&_svg:not([class*='size-'])]:size-5",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <CaretDownIcon className="pointer-events-none size-4 text-primary transition-transform duration-200 group-data-[state=open]/select-trigger:rotate-180" />
      </SelectPrimitive.Icon>
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
  position = "popper",
  search = false,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  search?: boolean | { placeholder?: string; emptyMessage?: string }
}) {
  const searchConfig = typeof search === "object" ? search : search ? {} : null
  const canSearch = searchConfig != null
  const searchPlaceholder = searchConfig?.placeholder ?? "Search"
  const emptyMessage = searchConfig?.emptyMessage

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "group/select-content relative isolate z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 w-(--radix-select-trigger-width)",
          canSearch ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto",
          className
        )}
        {...props}
      >
        {canSearch && <SelectSearchInput placeholder={searchPlaceholder} />}
        {!canSearch && <SelectScrollUpButton />}
        <SelectPrimitive.Viewport
          className={cn(
            "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
            canSearch &&
              "max-h-[min(calc(var(--radix-select-content-available-height)---spacing(9)))] scroll-py-1.5 overflow-y-auto overscroll-contain"
          )}
        >
          {children}
          {canSearch && <SelectEmpty>{emptyMessage}</SelectEmpty>}
        </SelectPrimitive.Viewport>
        {!canSearch && <SelectScrollDownButton />}
      </SelectPrimitive.Content>
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
    <InputGroup size="sm" className="w-auto mx-2 mt-2 flex items-center">
      <InputGroupAddon>
        <MagnifyingGlassIcon />
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const popup = e.currentTarget.closest<HTMLElement>(
              '[data-slot="select-content"]'
            )
            const firstItem = popup?.querySelector<HTMLElement>(
              '[data-slot="select-item"]'
            )
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
  if (inputValue.trim() === "" || children == null || firstVisibleId != null)
    return null
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
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
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
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
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
      <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="pointer-events-none" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 items-center whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
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
}: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <CaretUpIcon />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <CaretDownIcon />
    </SelectPrimitive.ScrollDownButton>
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
