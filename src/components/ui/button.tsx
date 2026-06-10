import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-md font-cta whitespace-nowrap transition-all duration-300 ease-out outline-none select-none focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring focus-visible:ring-2 active:not-aria-[haspopup]:scale-96 disabled:pointer-events-none disabled:text-muted-foreground! aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 has-[*[aria-label='Loading']]:text-muted-foreground! has-[*[aria-label='Loading']]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-fix-primary text-fix-primary-foreground hover:bg-fix-primary-hover disabled:bg-muted aria-expanded:bg-fix-primary-hover has-[*[aria-label='Loading']]:bg-muted",
        "neutral": "bg-foreground text-background hover:bg-muted-foreground disabled:bg-muted aria-expanded:bg-muted-foreground has-[*[aria-label='Loading']]:bg-muted",
        outline: "border-primary text-primary hover:border-primary-hover hover:text-primary-hover aria-expanded:bg-accent aria-expanded:text-primary disabled:border-muted-foreground has-[*[aria-label='Loading']]:border-muted-foreground!",
        "outline-neutral": "border-border text-foreground hover:text-muted-foreground aria-expanded:bg-muted aria-expanded:text-muted disabled:border-muted-foreground has-[*[aria-label='Loading']]:border-muted!",
        secondary: "bg-accent text-accent-foreground hover:bg-accent/80 aria-expanded:bg-secondary",
        "secondary-neutral": "bg-muted text-foreground hover:bg-muted/80 aria-expanded:bg-secondary",
        ghost: "text-primary hover:bg-accent aria-expanded:bg-accent aria-expanded:text-primary",
        "ghost-neutral": "text-foreground hover:bg-muted aria-expanded:bg-muted aria-expanded:text-primary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:border-destructive focus-visible:ring-destructive disabled:bg-muted dark:hover:bg-destructive/60 dark:focus-visible:ring-destructive",
        "destructive-outline": "border-destructive text-destructive hover:opacity-60 focus-visible:ring-destructive disabled:border-muted-foreground/30",
        "destructive-ghost": "text-destructive hover:bg-destructive/30 hover:opacity-60 focus-visible:ring-destructive",
        "destructive-link": "text-destructive underline-offset-4 hover:underline focus-visible:ring-destructive p-0! h-fit! w-fit!",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover p-0! h-fit! w-fit!",
        "link-neutral": "text-foreground underline-offset-4 hover:underline p-0! h-fit! w-fit!",
      },
      size: {
        default: "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-2 px-3 text-sm has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        lg: "h-12 gap-2 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-6",
        xl: "h-14 gap-2 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-6",
        icon: "size-10 [&_svg:not([class*='size-'])]:size-5 rounded-xl",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3 rounded-lg",
        "icon-sm": "size-8 rounded-[0.75rem]",
        "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-6 rounded-xl",
        "icon-xl": "size-14 [&_svg:not([class*='size-'])]:size-6 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
