import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit min-w-fit items-center justify-center rounded-full gap-1 bg-none p-0 text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col group-data-vertical/tabs:rounded-2xl data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted p-1.5",
        ghost: "",
        outline: "gap-2 [&_[data-slot=tabs-trigger]]:data-active:text-primary [&_[data-slot=tabs-trigger]]:data-active:bg-accent [&_[data-slot=tabs-trigger]]:border [&_[data-slot=tabs-trigger]]:data-active:border-primary [&_[data-slot=tabs-trigger]]:hover:not-data-active:border-secondary [&_[data-slot=tabs-trigger]]:data-active:dark:bg-accent/30 [&_[data-slot=tabs-trigger]]:data-active:dark:border-secondary [&_[data-slot=tabs-trigger]]:data-active:dark:text-secondary",
        line: "[&_[data-slot=tabs-trigger]]:data-active:text-primary [&_[data-slot=tabs-trigger]]:data-active:bg-transparent [&_[data-slot=tabs-trigger]]:data-active:dark:text-secondary",
      },
      size: {
        sm: "[&_[data-slot=tabs-trigger]]:h-8 [&_[data-slot=tabs-trigger]]:px-3 [&_[data-slot=tabs-trigger]]:text-sm data-[variant=line]:[&_[data-slot=tabs-trigger]]:p-2",
        default: "[&_[data-slot=tabs-trigger]]:h-10 [&_[data-slot=tabs-trigger]]:px-4 data-[variant=line]:[&_[data-slot=tabs-trigger]]:p-2",
        lg: "[&_[data-slot=tabs-trigger]]:h-12 [&_[data-slot=tabs-trigger]]:px-4 data-[variant=line]:[&_[data-slot=tabs-trigger]]:p-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  size = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex flex-1 items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap hover:not-data-active:text-secondary transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-vertical/tabs:py-1.5 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
        "data-active:bg-primary data-active:text-primary-foreground dark:data-active:text-primary-foreground",
        "after:absolute after:bg-primary after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-0 group-data-horizontal/tabs:after:h-px group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 dark:after:bg-secondary",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
