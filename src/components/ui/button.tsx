import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-md font-bold whitespace-nowrap transition-all transition-transform-6 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px active:not-aria-[haspopup]:scale-96 disabled:pointer-events-none disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 has-[*[aria-label='Loading']]:opacity-50 has-[*[aria-label='Loading']]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/60 disabled:bg-muted aria-expanded:bg-primary/80",
        outline: "border-primary text-primary hover:opacity-60 disabled:border-muted-foreground aria-expanded:bg-accent aria-expanded:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground", // remove secondary?
        ghost: "text-primary hover:bg-muted hover:opacity-60 aria-expanded:bg-accent aria-expanded:text-primary",
        "ghost-neutral": "text-foreground hover:bg-muted hover:opacity-60 aria-expanded:bg-muted aria-expanded:text-primary",
        destructive: "bg-destructive text-primary-foreground hover:bg-destructive/90 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 disabled:bg-muted disabled:!text-muted-foreground dark:text-background dark:hover:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        "destructive-outline": "border-destructive text-destructive hover:opacity-60 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 disabled:border-muted-foreground",
        "destructive-ghost": "text-destructive hover:opacity-60 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        "destructive-link": "text-destructive underline-offset-4 hover:underline focus-visible:border-destructive/40 focus-visible:ring-destructive/20 !p-0 !h-auto",
        link: "text-primary underline-offset-4 hover:underline !p-0 !h-auto",
      },
      size: {
        default: "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3", // NÃO remover size xs, pois é usado no ComboboxChipRemove e como suporte em outros componentes.
        sm: "h-8 gap-2 px-3 text-sm has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        lg: "h-12 gap-2 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-6",
        xl: "h-14 gap-2 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-6",
        icon: "size-10 [&_svg:not([class*='size-'])]:size-5",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-6",
        "icon-xl": "size-14 [&_svg:not([class*='size-'])]:size-6",
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
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
