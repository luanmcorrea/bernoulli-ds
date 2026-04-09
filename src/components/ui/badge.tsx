import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import React from "react"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-accent text-accent-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive text-primary-foreground [a]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive dark:focus-visible:ring-destructive/40 dark:text-background [a]:dark:hover:bg-destructive/60",
          "destructive-outline": "border-destructive text-destructive [a]:hover:opacity-60 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 disabled:border-muted-foreground",
          "destructive-ghost": "text-destructive [a]:hover:opacity-60 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
          "destructive-link": "text-destructive underline-offset-4 [a]:hover:underline focus-visible:border-destructive/40 focus-visible:ring-destructive/20 !p-0 !h-auto",
        outline:
          "border-primary text-primary [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: false,
    },
  }
)

function Badge({
  className,
  variant = "default",
  rounded = false,
  render,
  children,
  title,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {

  const isLong = typeof children === "string" && children.length > 20
  const truncated = isLong ? children.slice(0, 20) + "…" : children
  const finalTitle = title ?? (isLong ? children : undefined)

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, rounded }), className),
        children: truncated,
        title: finalTitle,
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
