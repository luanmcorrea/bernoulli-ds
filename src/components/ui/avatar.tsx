import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "xs" | "sm" | "lg" | "xl" | "2xl"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=2xl]:size-14 data-[size=xl]:size-12 data-[size=lg]:size-10 data-[size=sm]:size-6 data-[size=xs]:size-4 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-sm font-bold group-data-[size=xs]/avatar:text-xs group-data-[size=sm]/avatar:text-xs group-data-[size=lg]/avatar:text-base group-data-[size=xl]/avatar:text-lg group-data-[size=2xl]/avatar:text-xl",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-sidebar-primary text-primary-foreground bg-blend-color ring-2 ring-card select-none",
        "group-data-[size=xs]/avatar:size-1.25 group-data-[size=xs]/avatar:[&>svg]:hidden",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        "group-data-[size=xl]/avatar:size-3.5 group-data-[size=xl]/avatar:[&>svg]:size-2.5",
        "group-data-[size=2xl]/avatar:size-4 group-data-[size=2xl]/avatar:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadgeLevel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge-level"
      className={cn(
        "absolute -right-0.5 -bottom-0.5 z-10 inline-flex items-center justify-center rounded-full bg-sidebar-primary text-primary-foreground bg-blend-color ring-2 ring-card select-none size-4 font-semibold text-[0.625rem]",
        "group-data-[size=xs]/avatar:size-1.25 group-data-[size=xs]/avatar:text-[0px]",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:text-[0px]",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:text-[0px]",
        "group-data-[size=lg]/avatar:text-",
        "group-data-[size=xl]/avatar:text-",
        "group-data-[size=2xl]/avatar:size-4 group-data-[size=2xl]/avatar:text-",
        className
      )}
      {...props}
    />
  )
}

function AvatarProgressLevel({
  className,
  value = 40,
  strokeWidth = 8,
  ...props
}: React.ComponentProps<"span"> & {
  value?: number
  strokeWidth?: number
}) {
  const size = 100
  const radius = size / 2 - strokeWidth
  const circumference = 2 * Math.PI * radius
  const offset = circumference * ((100 - value) / 100)

  return (
    <span
      data-slot="avatar-progress-level"
      className={cn(
        "pointer-events-none absolute scale-131 rotate-32",
        className
      )}
      {...props}
    >
      <svg
        className="h-full! w-full!"
        viewBox="0 0 100 100"
      >
        {/* Base track */}
        <circle
          cx={size/2}
          cy={size/2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-muted"
          strokeWidth={strokeWidth}
        />

        {/* Progress */}
        <circle
          cx={size/2}
          cy={size/2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-sidebar-primary/50"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-card",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-accent-foreground ring-2 ring-card group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
  AvatarBadgeLevel,
  AvatarProgressLevel,
}
