import { Collapsible } from "@base-ui/react/collapsible"
import { useEffect, useMemo, useState, type ComponentType } from "react"
import {
  BookOpenIcon,
  CaretRightIcon,
  CaretUpDownIcon,
  CheckIcon,
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
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import AccordionExample from "@/examples/accordion-example"
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

type Section = {
  slug: string
  title: string
  component: ComponentType
}

type Theme = {
  name: string
  plataform: string
}

const sections: Section[] = [
  { slug: "accordion", title: "Accordion", component: AccordionExample },
  { slug: "avatar", title: "Avatar", component: AvatarExample },
  { slug: "badge", title: "Badge", component: BadgeExample },
  { slug: "button", title: "Button", component: ButtonExample },
  { slug: "card", title: "Card", component: CardExample },
  { slug: "checkbox", title: "Checkbox", component: CheckboxExample },
  { slug: "combobox", title: "Combobox", component: ComboboxExample },
  { slug: "context-menu", title: "Context Menu", component: ContextMenuExample },
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
]

const themes: Theme[] = [
  {
    name: "Multitude",
    plataform: "Adams",
  },
  {
    name: "Bernoulli",
    plataform: "Meu Bernoulli",
  },
]

const defaultSection = sections[0].slug
const defaultTheme = themes[0]

function getInitialSection() {
  if (typeof window === "undefined") {
    return defaultSection
  }

  const slug = window.location.hash.replace(/^#/, "")
  return sections.some((section) => section.slug === slug) ? slug : defaultSection
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
              <SidebarMenuButton
                size="lg"
                className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
              />
            }
          >
            <Item className="p-0" size="xs">
              <ItemContent>
                <ItemTitle className="text-sm">{selectedTheme.name}</ItemTitle>
                <ItemDescription>{selectedTheme.plataform}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <CaretUpDownIcon className="size-4" />
              </ItemActions>
            </Item>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.name}
                onSelect={() => onSelectTheme(theme)}
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
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <Collapsible.Root defaultOpen>
            <SidebarMenu>
              <SidebarMenuItem>
                <Collapsible.Trigger
                  render={
                    <SidebarMenuButton className="font-medium" />
                  }
                >
                  <BookOpenIcon className="size-4" />
                  <span>Components</span>
                  <CaretRightIcon className="ml-auto size-4 transition-transform ui-expanded:rotate-90" />
                </Collapsible.Trigger>
                <Collapsible.Panel className="overflow-hidden pt-1">
                  <div className="pl-2">
                    <SidebarMenu className="gap-1">
                      {sections.map((section) => (
                        <SidebarMenuItem key={section.slug}>
                          <SidebarMenuButton
                            isActive={section.slug === activeSection}
                            tooltip={section.title}
                            onClick={() => handleNavigate(section.slug)}
                          >
                            <span>{section.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </div>
                </Collapsible.Panel>
              </SidebarMenuItem>
            </SidebarMenu>
          </Collapsible.Root>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function ShowcaseHeader({ currentSection }: { currentSection: Section }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b px-4 md:px-6">
      <SidebarTrigger className="-ml-1" />
      <div className="h-4 w-px bg-border" />
      <nav
        aria-label="Breadcrumb"
        className="flex min-w-0 items-center gap-2 text-sm"
      >
        <span className="text-muted-foreground">Components</span>
        <CaretRightIcon className="size-3.5 text-muted-foreground" />
        <span className="truncate font-medium text-foreground">
          {currentSection.title}
        </span>
      </nav>
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
    () => sections.find((section) => section.slug === activeSection) ?? sections[0],
    [activeSection]
  )

  const CurrentExample = currentSection.component

  return (
    <SidebarProvider>
      <ComponentsSidebar activeSection={activeSection} />
      <SidebarInset className="min-w-0">
        <ShowcaseHeader currentSection={currentSection} />
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-hidden",
            currentSection.slug === "sidebar" && "bg-muted/20"
          )}
        >
          <CurrentExample />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
