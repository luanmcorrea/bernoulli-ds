import { useTheme } from "@/components/theme-provider"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  useEffect,
  useMemo,
  useState,
  type ComponentType,
} from "react"
import {
  BookOpenIcon,
  CaretRightIcon,
  CaretDownIcon,
  CheckIcon,
  CircleIcon,
  MagnifyingGlassIcon,
  PaletteIcon,
  SwatchesIcon,
  MoonIcon,
  SunDimIcon,
} from "@phosphor-icons/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd } from "@/components/ui/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import PreviewExample from "@/examples/preview"
import PreviewExample02 from "@/examples/preview-02"
import AccordionExample from "@/examples/accordion-example"
import AlertExample from "@/examples/alert-example"
import AlertDialogExample from "@/examples/alert-dialog-example"
import AvatarExample from "@/examples/avatar-example"
import BadgeExample from "@/examples/badge-example"
import BreadcrumbExample from "@/examples/breadcrumb-example"
import ButtonExample from "@/examples/button-example"
import CardExample from "@/examples/card-example"
import CheckboxExample from "@/examples/checkbox-example"
import ComboboxExample from "@/examples/combobox-example"
import CommandExample from "@/examples/command-example"
import ContextMenuExample from "@/examples/context-menu-example"
import DialogExample from "@/examples/dialog-example"
import DrawerExample from "@/examples/drawer-example"
import DropdownMenuExample from "@/examples/dropdown-menu-example"
import EmptyExample from "@/examples/empty-example"
import FieldExample from "@/examples/field-example"
import InputExample from "@/examples/input-example"
import InputOTPExample from "@/examples/input-otp-example"
import LabelExample from "@/examples/label-example"
import PaginationExample from "@/examples/pagination-example"
import PopoverExample from "@/examples/popover-example"
import ProgressExample from "@/examples/progress-example"
import RadioGroupExample from "@/examples/radio-group-example"
import SelectExample from "@/examples/select-example"
import SheetExample from "@/examples/sheet-example"
import SidebarExample from "@/examples/sidebar-example"
import SkeletonExample from "@/examples/skeleton-example"
import SliderExample from "@/examples/slider-example"
import SonnerExample from "@/examples/sonner-example"
import SwitchExample from "@/examples/switch-example"
import TableExample from "@/examples/table-example"
import TabsExample from "@/examples/tabs-example"
import TextareaExample from "@/examples/textarea-example"
import TooltipExample from "@/examples/tooltip-example"
import { Button } from "@/components/ui/button"
import { useBrandTheme } from "@/components/brand-theme-provider"
import {
  brandThemeOptions,
  getBrandThemeOption,
  getProfileThemeOption,
  profileThemeOptions,
  type BrandThemeOption,
} from "@/lib/brand-themes"
import { Separator } from "@/components/ui/separator"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command"
import { Toaster } from "@/components/ui/sonner"

type ComponentSection = {
  slug: string
  title: string
  component: ComponentType
}

type SectionGroup = {
  title: string
  icon: ComponentType
  sections: ComponentSection[]
}

const sections: SectionGroup[] = [
  {
    title: "Playground",
    icon: PaletteIcon,
    sections: [
      { slug: "preview", title: "Preview 01", component: PreviewExample },
      { slug: "preview-02", title: "Preview 02", component: PreviewExample02 },
    ],
  },
  {
    title: "Components",
    icon: BookOpenIcon,
    sections: [
      { slug: "accordion", title: "Accordion", component: AccordionExample },
      { slug: "alert", title: "Alert", component: AlertExample },
      { slug: "alert-dialog", title: "Alert Dialog", component: AlertDialogExample },
      { slug: "avatar", title: "Avatar", component: AvatarExample },
      { slug: "badge", title: "Badge", component: BadgeExample },
      { slug: "breadcrumb", title: "Breadcrumb", component: BreadcrumbExample },
      { slug: "button", title: "Button", component: ButtonExample },
      { slug: "card", title: "Card", component: CardExample },
      { slug: "checkbox", title: "Checkbox", component: CheckboxExample },
      { slug: "combobox", title: "Combobox", component: ComboboxExample },
      { slug: "command", title: "Command", component: CommandExample },
      { slug: "context-menu", title: "Context Menu",component: ContextMenuExample },
      { slug: "dialog", title: "Dialog", component: DialogExample },
      { slug: "drawer", title: "Drawer", component: DrawerExample },
      { slug: "dropdown-menu", title: "Dropdown Menu", component: DropdownMenuExample },
      { slug: "empty", title: "Empty", component: EmptyExample },
      { slug: "field", title: "Field", component: FieldExample },
      { slug: "input", title: "Input", component: InputExample },
      { slug: "input-otp", title: "Input OTP", component: InputOTPExample },
      { slug: "label", title: "Label", component: LabelExample },
      { slug: "pagination", title: "Pagination", component: PaginationExample },
      { slug: "popover", title: "Popover", component: PopoverExample },
      { slug: "progress", title: "Progress", component: ProgressExample },
      { slug: "radio-group", title: "Radio Group", component: RadioGroupExample },
      { slug: "select", title: "Select", component: SelectExample },
      { slug: "sheet", title: "Sheet", component: SheetExample },
      { slug: "sidebar", title: "Sidebar", component: SidebarExample },
      { slug: "skeleton", title: "Skeleton", component: SkeletonExample },
      { slug: "slider", title: "Slider", component: SliderExample },
      { slug: "sonner", title: "Sonner", component: SonnerExample },
      { slug: "switch", title: "Switch", component: SwitchExample },
      { slug: "table", title: "Table", component: TableExample },
      { slug: "tabs", title: "Tabs", component: TabsExample },
      { slug: "textarea", title: "Textarea", component: TextareaExample },
      { slug: "tooltip", title: "Tooltip", component: TooltipExample },
    ],
  },
]

const allSections = sections.flatMap((section) => section.sections)

const defaultSection = allSections[0].slug

function getInitialSection() {
  if (typeof window === "undefined") {
    return defaultSection
  }

  const slug = window.location.hash.replace(/^#/, "")
  return allSections.some((section) => section.slug === slug)
    ? slug
    : defaultSection
}

function TeamSwitcher({
  selectedTheme,
  onSelectTheme,
}: {
  selectedTheme: BrandThemeOption
  onSelectTheme: (theme: BrandThemeOption) => void
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" />
            }
          >
            <Item className="gap-2 p-0">
              <div className="flex size-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <SwatchesIcon />
              </div>
              <ItemContent className="gap-0">
                <ItemTitle>{selectedTheme.name}</ItemTitle>
                <ItemDescription className="text-xs">{selectedTheme.platform}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <CaretDownIcon className="size-4 transition-transform duration-200 group-data-popup-open/menu-button:rotate-180" />
              </ItemActions>
            </Item>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {brandThemeOptions.map((theme) => (
              <DropdownMenuItem
                key={theme.id}
                onClick={() => onSelectTheme(theme)}
                disabled={theme.available === false}
              >
                <div className="flex flex-col">
                  <span>{theme.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {theme.platform}
                  </span>
                </div>
                {theme.id === selectedTheme.id ? (
                  <CheckIcon className="ml-auto size-4" />
                ) : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

function ProfileSwitcher() {
  const { brandTheme, profileTheme, setProfileTheme } = useBrandTheme()
  const selectedBrand = getBrandThemeOption(brandTheme)
  const selectedProfile = getProfileThemeOption(profileTheme)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger render={<SidebarMenuButton />}>
            <Item className="gap-2 p-0">
              <div className="flex size-8 items-center justify-center">
                <CircleIcon weight="fill" className="size-4 text-sidebar-primary" />
              </div>
              <ItemContent className="gap-0">
                <ItemTitle>{selectedProfile.label}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <CaretDownIcon className="size-4 transition-transform duration-200 group-data-popup-open/menu-button:rotate-180" />
              </ItemActions>
            </Item>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {profileThemeOptions.map((profile) => {
              const isDisabled = !selectedBrand.supportedProfiles.includes(
                profile.id
              )

              return (
                <DropdownMenuItem
                  key={profile.id}
                  onClick={() => setProfileTheme(profile.id)}
                  disabled={isDisabled}
                >
                  <div className="flex flex-col">
                    <span>{profile.label}</span>
                  </div>
                  {profile.id === selectedProfile.id ? (
                    <CheckIcon className="ml-auto size-4" />
                  ) : null}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

function ComponentsSidebar({
  activeSection,
}: {
  activeSection: string
}) {
  const { isMobile, setOpenMobile } = useSidebar()
  const { brandTheme, setBrandTheme } = useBrandTheme()
  const selectedTheme = getBrandThemeOption(brandTheme)

  const handleNavigate = (slug: string) => {
    window.location.hash = slug

    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher
          selectedTheme={selectedTheme}
          onSelectTheme={(theme) => setBrandTheme(theme.id)}
        />
        <ProfileSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarMenu>
            {sections.map((section) => (
              <Collapsible
                key={section.title}
                render={<SidebarMenuItem />}
                defaultOpen
              >
                <CollapsibleTrigger
                  render={<SidebarMenuButton tooltip={section.title} />}
                >
                  {section.icon && <section.icon />}
                  <span>{section.title}</span>
                  <CaretRightIcon className="ml-auto transition-transform duration-200 group-data-open/menu-item:rotate-90" />
                </CollapsibleTrigger>
                <SidebarMenuItem>
                  <CollapsibleContent className="overflow-hidden pt-1">
                    <SidebarMenuSub>
                      {section.sections?.map((subSection) => (
                        <SidebarMenuSubItem key={subSection.slug}>
                          <SidebarMenuSubButton
                            render={<a href={`#${subSection.slug}`}><span>{subSection.title}</span></a>}
                            isActive={subSection.slug === activeSection}
                            onClick={() => handleNavigate(subSection.slug)}
                          >                            
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

function PageHeader({
  currentSection,
  onNavigate,
}: {
  currentSection: ComponentSection
  onNavigate: (slug: string) => void
}) {
  const [open, setOpen] = useState(false)
  const shortcutLabel =
    typeof navigator !== "undefined" && navigator.platform.includes("Mac")
      ? "Cmd+K"
      : "Ctrl+K"

  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {setTheme(theme === "dark" ? "light" : "dark")}

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

  return (
    <header className="flex h-16 items-center gap-3 px-4 md:px-6">      
      <Toaster richColors={true} position="top-center"/>
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 my-auto h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentSection.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Button variant="ghost-neutral" size="icon-sm" className="border-border ml-auto" onClick={toggleTheme}>
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
        <MagnifyingGlassIcon />Search...<Kbd className="hidden md:flex translate-x-2">{shortcutLabel}</Kbd>
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
                      onSelect={() => {
                        onNavigate(section.slug)
                        setOpen(false)
                      }}
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

export function ComponentShowcase() {
  const [activeSection, setActiveSection] = useState(getInitialSection)

  const handleNavigate = (slug: string) => {
    setActiveSection(slug)
    window.location.hash = slug
  }

  useEffect(() => {
    const onHashChange = () => {
      setActiveSection(getInitialSection())
    }

    onHashChange()
    window.addEventListener("hashchange", onHashChange)

    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const currentSection = useMemo(
    () =>
      allSections.find((section) => section.slug === activeSection) ??
      allSections[0],
    [activeSection]
  )

  const CurrentExample = currentSection.component

  return (
    <SidebarProvider>
      <ComponentsSidebar activeSection={activeSection} />
      <SidebarInset className="w-full overflow-x-hidden max-h-screen">
        <PageHeader
          currentSection={currentSection}
          onNavigate={handleNavigate}
        />
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-auto",
            currentSection.slug === "sidebar" && "bg-muted/20"
          )}
        >
          <CurrentExample/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 
