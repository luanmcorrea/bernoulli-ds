import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

function ExampleWrapper({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="w-full">
      <div
        data-slot="example-wrapper"
        className={cn(
          "flex flex-col mx-auto min-h-screen w-full max-w-5xl min-w-0 content-start items-start gap-y-4 gap-x-8 p-4 pt-2 sm:p-6 lg:grid lg:grid-cols-2 lg:p-12 2xl:max-w-6xl",
          className
        )}
        {...props}
      />
    </div>
  )
}

function Example({
  title,
  children,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"div"> & {
  title?: string
  containerClassName?: string
}) {
  return (
    <div
      data-slot="example"
      className={cn(
        "mx-auto flex w-full max-w-lg min-w-0 flex-col gap-1 self-stretch lg:max-w-none",
        containerClassName
      )}
      {...props}
    >
      {title ? (
        <div className="px-1.5 py-2 text-xs font-medium text-muted-foreground">
          {title}
        </div>
      ) : null}
      <Card
        data-slot="example-content"
        className={cn(
          "flex min-w-0 flex-1 flex-col items-start gap-6d bg-card shadow-sm p-10 text-foreground overflow-x-auto *:[div:not([class*='w-'])]:w-full",
          className
        )}
      >
        {children}
      </Card>
    </div>
  )
}

export { Example, ExampleWrapper }
