import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useEffect, useMemo, useState, type ComponentType } from "react"
import {
  BookOpenIcon,
  CaretRightIcon,
  CaretDownIcon,
  CheckIcon,
  SwatchesIcon,
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
import PreviewExample from "@/blocks/preview/index.tsx"
import AccordionExample from "@/examples/accordion-example"
import AlertDialogExample from "@/examples/alert-dialog-example"
import AvatarExample from "@/examples/avatar-example"
import BadgeExample from "@/examples/badge-example"
import ButtonExample from "@/examples/button-example"
import CardExample from "@/examples/card-example"
import CheckboxExample from "@/examples/checkbox-example"
import ComboboxExample from "@/examples/combobox-example"
import ContextMenuExample from "@/examples/context-menu-example"
import DialogExample from "@/examples/dialog-example"
import DropdownMenuExample from "@/examples/dropdown-menu-example"
import EmptyExample from "@/examples/empty-example"
import InputExample from "@/examples/input-example"
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
import SwitchExample from "@/examples/switch-example"
import TableExample from "@/examples/table-example"
import TabsExample from "@/examples/tabs-example"
import TextareaExample from "@/examples/textarea-example"
import TooltipExample from "@/examples/tooltip-example"
import { Separator } from "@/components/ui/separator"

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

type Theme = {
  name: string
  plataform: string
  active: boolean
}

const sections: SectionGroup[] = [
  {
    title: "Components",
    icon: BookOpenIcon,
    sections: [
      { slug: "preview", title: "Preview", component: PreviewExample },
      { slug: "accordion", title: "Accordion", component: AccordionExample },
      { slug: "alert-dialog", title: "Alert Dialog", component: AlertDialogExample },
      { slug: "avatar", title: "Avatar", component: AvatarExample },
      { slug: "badge", title: "Badge", component: BadgeExample },
      { slug: "button", title: "Button", component: ButtonExample },
      { slug: "card", title: "Card", component: CardExample },
      { slug: "checkbox", title: "Checkbox", component: CheckboxExample },
      { slug: "combobox", title: "Combobox", component: ComboboxExample },
      { slug: "context-menu", title: "Context Menu",component: ContextMenuExample },
      { slug: "dialog", title: "Dialog", component: DialogExample },
      { slug: "dropdown-menu", title: "Dropdown Menu", component: DropdownMenuExample },
      { slug: "empty", title: "Empty", component: EmptyExample },
      { slug: "input", title: "Input", component: InputExample },
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
      { slug: "switch", title: "Switch", component: SwitchExample },
      { slug: "table", title: "Table", component: TableExample },
      { slug: "tabs", title: "Tabs", component: TabsExample },
      { slug: "textarea", title: "Textarea", component: TextareaExample },
      { slug: "tooltip", title: "Tooltip", component: TooltipExample },
    ],
  },
]

const allSections = sections.flatMap((section) => section.sections)

const themes: Theme[] = [
  {
    name: "Multitude",
    plataform: "Adams",
    active: true,
  },
  {
    name: "Bernoulli",
    plataform: "Meu Bernoulli",
    active: false,
  },
]

const defaultSection = allSections[0].slug
const defaultTheme = themes[0]

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
  selectedTheme: Theme
  onSelectTheme: (theme: Theme) => void
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
            <Item className="gap-2">
              <div className="flex size-8 items-center justify-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground">
                <SwatchesIcon />
              </div>
              <ItemContent>
                <ItemTitle>{selectedTheme.name}</ItemTitle>
                <ItemDescription className="text-xs">{selectedTheme.plataform}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <CaretDownIcon className="size-4 transition-transform duration-200 group-data-popup-open/menu-button:rotate-180" />
              </ItemActions>
            </Item>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.name}
                onSelect={() => onSelectTheme(theme)}
                disabled={theme.active === false}
              >
                <div className="flex flex-col">
                  <span>{theme.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {theme.plataform}
                  </span>
                </div>
                {theme.name === selectedTheme.name ? (
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

function ComponentsSidebar({
  activeSection,
}: {
  activeSection: string
}) {
  const { isMobile, setOpenMobile } = useSidebar()
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme)

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
          onSelectTheme={setSelectedTheme}
        />
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
}: {
  currentSection: ComponentSection
}) {
  return (
    <header className="flex h-16 items-center gap-3 px-4 md:px-6">
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
    </header>
  )
}

export function ComponentShowcase() {
  const [activeSection, setActiveSection] = useState(getInitialSection)

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
      <SidebarInset className=" max-h-screen">
        <PageHeader currentSection={currentSection} />
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col no-scrollbar overflow-auto",
            currentSection.slug === "sidebar" && "bg-muted/20"
          )}
        >
          <CurrentExample/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
