import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-1.5 py-0.5 text-xs font-cta rounded-full font-medium whitespace-nowrap transition-all focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring focus-visible:ring-2 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-fix-primary text-fix-primary-foreground [a]:hover:bg-primary/80",
        neutral:
          "bg-foreground text-background [a]:hover:bg-foreground/80",
          "neutral-secondary": "bg-muted text-foreground [a]:hover:bg-muted/80",
          "neutral-outline": "border-foreground text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        secondary:
          "bg-accent text-accent-foreground [a]:hover:bg-secondary/80",
          "secondary-neutral": "bg-muted text-foreground [a]:hover:bg-foreground/80",
        destructive:
          "bg-destructive text-primary-foreground [a]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive dark:focus-visible:ring-destructive/40 dark:text-background [a]:dark:hover:bg-destructive/60",
          "destructive-secondary": "bg-destructive-accent text-foreground [a]:hover:bg-destructive-accent/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a]:dark:hover:bg-destructive-accent/60",
          "destructive-outline": "border-destructive text-destructive [a]:hover:opacity-60 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 disabled:border-muted-foreground",
        success:
          "bg-success text-success-foreground [a]:hover:bg-success/80",
          "success-secondary": "bg-success-accent text-foreground [a]:hover:bg-success-accent/80",
          "success-outline": "border-success text-success [a]:hover:bg-muted",        
          warning:
          "bg-warning text-warning-foreground [a]:hover:bg-warning/80",
          "warning-secondary": "bg-warning-accent text-foreground [a]:hover:bg-warning-accent/80",
          "warning-outline": "border-warning text-warning [a]:hover:bg-muted", 
        info:
          "bg-info text-info-foreground [a]:hover:bg-info/80",
          "info-secondary": "bg-info-accent text-foreground [a]:hover:bg-info-accent/80",
          "info-outline": "border-info text-info [a]:hover:bg-muted", 
        outline:
          "border-primary text-primary [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  children,
  title,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  const isLong = typeof children === "string" && children.length > 20
  const truncated = isLong ? (children as string).slice(0, 20) + "…" : children
  const finalTitle = title ?? (isLong ? (children as string) : undefined)

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      title={finalTitle}
      {...props}
    >
      {truncated}
    </Comp>
  )
}

export { Badge, badgeVariants }
