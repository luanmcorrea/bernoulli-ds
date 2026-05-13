import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"

import { cn } from "@/lib/utils"
import { debounce } from "@/lib/debounce"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { CaretDownIcon, XCircleIcon, CheckIcon, XIcon } from "@phosphor-icons/react"
import { Badge } from "./badge"

const Combobox = ComboboxPrimitive.Root
type ComboboxOverflowBehavior = "wrap" | "wrap-when-open" | "cutoff"

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("group/combobox-trigger [&_svg:not([class*='size-'])]:size-4 has-disabled:cursor-not-allowed", className)}
      {...props}
    >
      {children}
      <CaretDownIcon className="pointer-events-none size-4 transition-transform duration-200 group-data-popup-open/combobox-trigger:rotate-180" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="pointer-events-none size-4" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  size = "default",
  ...props
}: Omit<ComboboxPrimitive.Input.Props, "size"> & {
  showTrigger?: boolean
  showClear?: boolean
  size?: "sm" | "default" | "lg"
}) {
  return (
    <InputGroup size={size} className={cn("w-auto", className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            asChild
            data-slot="input-group-button"
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn("group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1.5 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input *:data-[slot=input-group]:shadow-none dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1.5 overflow-y-auto overscroll-contain p-1.5 data-empty:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium outline-hidden select-none transition-all duration-100 ease-out active:scale-97 data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("px-3 py-2.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("-mx-1.5 my-1.5 h-px bg-border", className)}
      {...props}
    />
  )
}

const ComboboxChips = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
      ComboboxPrimitive.Chips.Props,
    "size"
  > & {
    overflowBehavior?: ComboboxOverflowBehavior
    size?: "sm" | "default" | "lg"
  }
>(function ComboboxChips(
  {
    className,
    children,
    overflowBehavior = "wrap",
    size = "default",
    ...props
  },
  forwardedRef,
) {
  const [overflowAmount, setOverflowAmount] = React.useState(0)
  const [popupOpen, setPopupOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const overflowRef = React.useRef<HTMLDivElement | null>(null)

  const updateOverflow = React.useCallback(() => {
    const containerElement = containerRef.current
    if (containerElement == null) return

    const inputElement = containerElement.querySelector<HTMLInputElement>(
      "[data-slot='combobox-chip-input']",
    )
    const chipElements = containerElement.querySelectorAll<HTMLElement>(
      "[data-slot='combobox-chip']",
    )
    const overflowElement = overflowRef.current

    const nextPopupOpen = inputElement?.hasAttribute("data-popup-open") ?? false
    const nextShouldWrap =
      overflowBehavior === "wrap" ||
      (overflowBehavior === "wrap-when-open" && nextPopupOpen)

    setPopupOpen(nextPopupOpen)

    if (overflowElement != null) overflowElement.style.display = "none"
    chipElements.forEach(chip => chip.style.removeProperty("display"))

    if (nextShouldWrap) {
      setOverflowAmount(0)
      return
    }

    let amount = 0
    for (let i = chipElements.length - 1; i >= 0; i--) {
      if (containerElement.scrollWidth <= containerElement.clientWidth) {
        break
      }

      amount = chipElements.length - i
      chipElements[i]!.style.display = "none"
      overflowElement?.style.removeProperty("display")
    }

    setOverflowAmount(amount)
  }, [overflowBehavior])

  const shouldWrap =
    overflowBehavior === "wrap" ||
    (overflowBehavior === "wrap-when-open" && popupOpen)

  const setRefs = React.useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node

      if (typeof forwardedRef === "function") {
        forwardedRef(node)
      } else if (forwardedRef != null) {
        forwardedRef.current = node
      }
    },
    [forwardedRef],
  )

  React.useEffect(() => {
    const node = containerRef.current
    if (node == null) return

    const observer = new ResizeObserver(debounce(updateOverflow, 100))
    const mutationObserver = new MutationObserver(updateOverflow)
    const inputElement = node.querySelector<HTMLInputElement>(
      "[data-slot='combobox-chip-input']",
    )
    const inputObserver =
      inputElement == null
        ? null
        : new MutationObserver(() => {
            updateOverflow()
          })

    observer.observe(node)
    mutationObserver.observe(node, {
      childList: true,
      subtree: true,
    })
    if (inputElement != null && inputObserver != null) {
      observer.observe(inputElement)
      inputObserver.observe(inputElement, {
        attributes: true,
        attributeFilter: ["data-popup-open"],
      })
    }

    updateOverflow()

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      inputObserver?.disconnect()
    }
  }, [updateOverflow])

  React.useEffect(() => {
    updateOverflow()
  }, [updateOverflow, children])

  return (
    <ComboboxPrimitive.Chips
      ref={setRefs}
      data-slot="combobox-chips"
      data-overflow-behavior={overflowBehavior}
      data-size={size}
      className={cn(
        "flex w-full min-w-0 items-center gap-1 overflow-hidden rounded-3xl border bg-input bg-clip-padding px-3 py-1.5 text-sm transition-[color,box-shadow,background-color] data-[size=sm]:min-h-8 data-[size=default]:min-h-10 data-[size=lg]:min-h-12 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:bg-muted has-disabled:opacity-50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-3 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
        shouldWrap && "h-fit flex-wrap overflow-visible",
        className
      )}
      {...props}
    >
      {children}
      <Badge
        ref={overflowRef}
        variant="secondary-neutral"
        data-slot="combobox-chip-overflow"
        className="order-1 px-1 shrink-0"
        style={{
          display: overflowAmount > 0 && !shouldWrap ? "block" : "none",
        }}
      >
        +{overflowAmount}
      </Badge>
    </ComboboxPrimitive.Chips>
  )
})

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      render={<Badge variant="secondary" />}
      data-slot="combobox-chip"
      className={cn(
        "not-data-disabled:has-data-[slot=combobox-chip-remove]:pr-0",
        className
      )}
      {...props}
    >
      <span className="max-w-26 truncate">{children}</span>      
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="-ml-1 text-inherit! data-disabled:hidden"
          data-slot="combobox-chip-remove"
        >
          <XCircleIcon className="pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn("order-3 min-w-8 max-w-20 outline-none", className)}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}
