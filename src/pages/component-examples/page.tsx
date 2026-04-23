"use client"

import {
  useEffect,
  useMemo,
  type ComponentType,
  useState,
} from "react"
import {
  CaretRightIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunDimIcon,
} from "@phosphor-icons/react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/pages/component-examples/components/app-sidebar"
import {
  allComponentRoutes,
  defaultComponentRoute,
  getComponentPath,
  getComponentRouteFromPath,
  sections,
  type ComponentRoute,
} from "@/pages/component-examples/routes"

type PageHeaderProps = {
  currentSection: ComponentRoute
  onNavigate: (slug: string) => void
}

function PageHeader({ currentSection, onNavigate }: PageHeaderProps) {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const shortcutLabel =
    typeof navigator !== "undefined" && navigator.platform.includes("Mac")
      ? "Cmd+K"
      : "Ctrl+K"

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleSelect = (value: string) => {
    onNavigate(value)
    setOpen(false)
  }

  return (
    <header className="flex h-16 items-center gap-3 px-4 md:px-6">
      <Toaster richColors position="top-center" />
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="my-auto mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink
              href={defaultComponentRoute.path}
              onClick={(event) => {
                event.preventDefault()
                onNavigate(defaultComponentRoute.slug)
              }}
            >
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentSection.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Button
        variant="ghost-neutral"
        size="icon-sm"
        className="ml-auto border-border"
        onClick={toggleTheme}
      >
        <SunDimIcon className="transition-all dark:scale-0 dark:-rotate-90" />
        <MoonIcon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        variant="ghost-neutral"
        size="sm"
        className="border-border font-normal"
      >
        <MagnifyingGlassIcon />
        Search...
        <Kbd className="hidden translate-x-2 md:flex">{shortcutLabel}</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {sections.map((sectionGroup, index) => (
              <div key={sectionGroup.title}>
                {index > 0 ? <CommandSeparator /> : null}
                <CommandGroup heading={sectionGroup.title}>
                  {sectionGroup.sections.map((section) => (
                    <CommandItem
                      key={section.slug}
                      value={`${sectionGroup.title} ${section.title} ${section.slug}`}
                      onSelect={() => handleSelect(section.slug)}
                    >
                      <CaretRightIcon className="text-muted-foreground" />
                      <span>{section.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </header>
  )
}

export function ComponentExamplesPage() {
  const [activeSection, setActiveSection] = useState<ComponentRoute>(() => {
    if (typeof window === "undefined") {
      return defaultComponentRoute
    }

    return getComponentRouteFromPath(window.location.pathname)
  })

  const handleNavigate = (slug: string, options?: { replace?: boolean }) => {
    const nextSection =
      allComponentRoutes.find((section) => section.slug === slug) ??
      defaultComponentRoute

    setActiveSection(nextSection)

    if (typeof window === "undefined") {
      return
    }

    const nextPath = getComponentPath(nextSection.slug)
    if (window.location.pathname === nextPath) {
      return
    }

    const historyMethod = options?.replace ? "replaceState" : "pushState"
    window.history[historyMethod](null, "", nextPath)
  }

  useEffect(() => {
    const syncRouteWithLocation = (replaceInvalidPath = false) => {
      const nextSection = getComponentRouteFromPath(window.location.pathname)
      setActiveSection(nextSection)

      const isKnownPath = allComponentRoutes.some(
        (section) => section.path === window.location.pathname
      )

      if (!isKnownPath && replaceInvalidPath) {
        window.history.replaceState(null, "", nextSection.path)
      }
    }

    const onPopState = () => {
      syncRouteWithLocation()
    }

    syncRouteWithLocation(true)
    window.addEventListener("popstate", onPopState)

    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const CurrentExample: ComponentType = useMemo(
    () => activeSection.component,
    [activeSection]
  )

  return (
    <SidebarProvider>
      <AppSidebar
        items={sections}
        activeSection={activeSection.slug}
        onNavigate={(slug) => handleNavigate(slug)}
      />
      <SidebarInset className="max-h-screen w-full overflow-x-hidden">
        <PageHeader
          currentSection={activeSection}
          onNavigate={(slug) => handleNavigate(slug)}
        />
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-auto",
            activeSection.slug === "sidebar" && "bg-muted/20"
          )}
        >
          <CurrentExample />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
