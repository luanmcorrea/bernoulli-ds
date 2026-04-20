import { useTheme } from "@/components/theme-provider"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CheckCircleIcon, InfoIcon, WarningCircleIcon, XCircleIcon } from "@phosphor-icons/react"
import { Spinner } from "@/components/ui/spinner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CheckCircleIcon weight="fill" className="size-4" />
        ),
        info: (
          <InfoIcon weight="fill" className="size-4" />
        ),
        warning: (
          <WarningCircleIcon weight="fill" className="size-4" />
        ),
        error: (
          <XCircleIcon weight="fill" className="size-4" />
        ),
        loading: (
          <Spinner className="size-4" />
        ),
      }}
      style={
        {
          "--border-radius": "var(--radius-xl)",          
          "--normal-bg": "var(--foreground)",
          "--normal-text": "var(--background)",
          "--normal-border": "none",

          "--success-bg": "var(--color-green-600)",
          "--success-text": "var(--primary-foreground)",

          "--info-bg": "var(--color-sky-600)",
          "--info-text": "var(--primary-foreground)",
          
          "--warning-bg": "var(--color-amber-600)",
          "--warning-text": "var(--primary-foreground)",

          "--error-bg": "var(--color-red-600)",
          "--error-text": "var(--primary-foreground)",

        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast!",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
