import { useEffect, useMemo, useState, type ComponentType } from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

const defaultSection = sections[0].slug

function getInitialSection() {
  if (typeof window === "undefined") {
    return defaultSection
  }

  const slug = window.location.hash.replace(/^#/, "")
  return sections.some((section) => section.slug === slug) ? slug : defaultSection
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
    <div className="flex min-h-svh bg-background">
      <aside className="hidden w-72 shrink-0 border-r lg:block">
        <div className="sticky top-0 flex h-svh flex-col">
          <div className="border-b px-6 py-5">
            <h1 className="text-sm font-medium">Bernoulli DS Components</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Base examples from the official registry.
            </p>
          </div>
          <nav className="flex-1 overflow-y-auto p-3">
            <div className="grid gap-1">
              {sections.map((section) => (
                <a
                  key={section.slug}
                  href={`#${section.slug}`}
                  className={cn(
                    "rounded-2xl px-3 py-2 text-sm transition-colors",
                    section.slug === currentSection.slug
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </aside>
      <main className="min-w-0 flex-1 overflow-hidden">
        <div className="border-b px-6 py-5 lg:hidden">
          <Select
            value={currentSection.slug}
            onValueChange={(value) => {
              if (value) {
                window.location.hash = value
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a component" />
            </SelectTrigger>
            <SelectContent>
              {sections.map((section) => (
                <SelectItem key={section.slug} value={section.slug}>
                  {section.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <CurrentExample />
      </main>
    </div>
  )
}
