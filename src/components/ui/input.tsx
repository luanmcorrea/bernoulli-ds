import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  size = "default",
  type,
  ...props
}: Omit<React.ComponentProps<"input">, "size"> & {
  size?: "sm" | "default" | "lg"
}) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size}
      className={cn(
        "w-full min-w-0 rounded-3xl border bg-input px-3 py-1 text-base transition-[color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-10 data-[size=sm]:h-8 data-[size=lg]:h-12 data-[size=lg]:text-xl data-[size=lg]:p-4 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
