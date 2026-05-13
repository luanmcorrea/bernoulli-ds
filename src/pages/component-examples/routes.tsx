"use client"

import type { ComponentType } from "react"
import { CubeIcon, PaletteIcon } from "@phosphor-icons/react"

import AccordionExample from "@/pages/component-examples/examples/accordion-example"
import AlertDialogExample from "@/pages/component-examples/examples/alert-dialog-example"
import AlertExample from "@/pages/component-examples/examples/alert-example"
import AvatarExample from "@/pages/component-examples/examples/avatar-example"
import BadgeExample from "@/pages/component-examples/examples/badge-example"
import BreadcrumbExample from "@/pages/component-examples/examples/breadcrumb-example"
import ButtonExample from "@/pages/component-examples/examples/button-example"
import CardExample from "@/pages/component-examples/examples/card-example"
import CheckboxExample from "@/pages/component-examples/examples/checkbox-example"
import ComboboxExample from "@/pages/component-examples/examples/combobox-example"
import CommandExample from "@/pages/component-examples/examples/command-example"
import ContextMenuExample from "@/pages/component-examples/examples/context-menu-example"
import DialogExample from "@/pages/component-examples/examples/dialog-example"
import DrawerExample from "@/pages/component-examples/examples/drawer-example"
import DropdownMenuExample from "@/pages/component-examples/examples/dropdown-menu-example"
import EmptyExample from "@/pages/component-examples/examples/empty-example"
import FieldExample from "@/pages/component-examples/examples/field-example"
import InputGroupExample from "@/pages/component-examples/examples/input-group-example"
import InputOTPExample from "@/pages/component-examples/examples/input-otp-example"
import InputExample from "@/pages/component-examples/examples/input-example"
import LabelExample from "@/pages/component-examples/examples/label-example"
import MultiselectExample from "@/pages/component-examples/examples/multiselect-example"
import NativeSelectExample from "@/pages/component-examples/examples/native-select-example"
import PaginationExample from "@/pages/component-examples/examples/pagination-example"
import PopoverExample from "@/pages/component-examples/examples/popover-example"
import Page from "@/pages/component-examples/examples/dashboard/page"
import CardsExample1 from "@/pages/component-examples/examples/cards-1"
import CardsExample2 from "@/pages/component-examples/examples/cards-2"
import ProgressExample from "@/pages/component-examples/examples/progress-example"
import RadioGroupExample from "@/pages/component-examples/examples/radio-group-example"
import SelectExample from "@/pages/component-examples/examples/select-example"
import SheetExample from "@/pages/component-examples/examples/sheet-example"
import SidebarExample from "@/pages/component-examples/examples/sidebar-example"
import SkeletonExample from "@/pages/component-examples/examples/skeleton-example"
import SliderExample from "@/pages/component-examples/examples/slider-example"
import SonnerExample from "@/pages/component-examples/examples/sonner-example"
import SwitchExample from "@/pages/component-examples/examples/switch-example"
import TableExample from "@/pages/component-examples/examples/table-example"
import TabsExample from "@/pages/component-examples/examples/tabs-example"
import TextareaExample from "@/pages/component-examples/examples/textarea-example"
import TooltipExample from "@/pages/component-examples/examples/tooltip-example"

export type ComponentRoute = {
  slug: string
  title: string
  extra: boolean
  path: string
  component: ComponentType
}

export type SectionGroup = {
  title: string
  icon: ComponentType
  sections: ComponentRoute[]
}

export const sections: SectionGroup[] = [
  {
    title: "Playground",
    icon: PaletteIcon,
    sections: [
      { slug: "cards-1", title: "Cards 1", extra: false, path: "/cards-01", component: CardsExample1, },
      { slug: "cards-2", title: "Cards 2", extra: false, path: "/cards-02", component: CardsExample2, },
      { slug: "dashboard", title: "Dashboard", extra: false, path: "/dashboard", component: Page, },
    ],
  },
  {
    title: "Components",
    icon: CubeIcon,
    sections: [
      { slug: "accordion", title: "Accordion", extra: false, path: "/accordion", component: AccordionExample, },
      { slug: "alert", title: "Alert", extra: false, path: "/alert", component: AlertExample, },
      { slug: "alert-dialog", title: "Alert Dialog", extra: false, path: "/alert-dialog", component: AlertDialogExample, },
      { slug: "avatar", title: "Avatar", extra: false, path: "/avatar", component: AvatarExample, },
      { slug: "badge", title: "Badge", extra: false, path: "/badge", component: BadgeExample, },
      { slug: "breadcrumb", title: "Breadcrumb", extra: false, path: "/breadcrumb", component: BreadcrumbExample, },
      { slug: "button", title: "Button", extra: false, path: "/button", component: ButtonExample, },
      { slug: "card", title: "Card", extra: false, path: "/card", component: CardExample, },
      { slug: "checkbox", title: "Checkbox", extra: false, path: "/checkbox", component: CheckboxExample, },
      { slug: "combobox", title: "Combobox", extra: false, path: "/combobox", component: ComboboxExample, },
      { slug: "command", title: "Command", extra: false, path: "/command", component: CommandExample, },
      { slug: "context-menu", title: "Context Menu", extra: false, path: "/context-menu", component: ContextMenuExample, },
      { slug: "dialog", title: "Dialog", extra: false, path: "/dialog", component: DialogExample, },
      { slug: "drawer", title: "Drawer", extra: false, path: "/drawer", component: DrawerExample, },
      { slug: "dropdown-menu", title: "Dropdown Menu", extra: false, path: "/dropdown-menu", component: DropdownMenuExample, },
      { slug: "empty", title: "Empty", extra: false, path: "/empty", component: EmptyExample, },
      { slug: "field", title: "Field", extra: false, path: "/field", component: FieldExample, },
      { slug: "input", title: "Input", extra: false, path: "/input", component: InputExample, },
      { slug: "input-group", title: "Input Group", extra: false, path: "/input", component: InputGroupExample, },
      { slug: "input-otp", title: "Input OTP", extra: false, path: "/input-otp", component: InputOTPExample, },
      { slug: "label", title: "Label", extra: false, path: "/label", component: LabelExample, },
      { slug: "multiselect", title: "Multiselect", extra: true, path: "/multiselect", component: MultiselectExample, },
      { slug: "native-select", title: "Native Select", extra: false, path: "/native-select", component: NativeSelectExample, },
      { slug: "pagination", title: "Pagination", extra: false, path: "/pagination", component: PaginationExample, },
      { slug: "popover", title: "Popover", extra: false, path: "/popover", component: PopoverExample, },
      { slug: "progress", title: "Progress", extra: false, path: "/progress", component: ProgressExample, },
      { slug: "radio-group", title: "Radio Group", extra: false, path: "/radio-group", component: RadioGroupExample, },
      { slug: "select", title: "Select", extra: false, path: "/select", component: SelectExample, },
      { slug: "sheet", title: "Sheet", extra: false, path: "/sheet", component: SheetExample, },
      { slug: "sidebar", title: "Sidebar", extra: false, path: "/sidebar", component: SidebarExample, },
      { slug: "skeleton", title: "Skeleton", extra: false, path: "/skeleton", component: SkeletonExample, },
      { slug: "slider", title: "Slider", extra: false, path: "/slider", component: SliderExample, },
      { slug: "sonner", title: "Sonner", extra: false, path: "/sonner", component: SonnerExample, },
      { slug: "switch", title: "Switch", extra: false, path: "/switch", component: SwitchExample, },
      { slug: "table", title: "Table", extra: false, path: "/table", component: TableExample, },
      { slug: "tabs", title: "Tabs", extra: false, path: "/tabs", component: TabsExample, },
      { slug: "textarea", title: "Textarea", extra: false, path: "/textarea", component: TextareaExample, },
      { slug: "tooltip", title: "Tooltip", extra: false, path: "/tooltip", component: TooltipExample, },
    ],
  },
]

export const allComponentRoutes = sections.flatMap((section) => section.sections)
export const defaultComponentRoute = allComponentRoutes[0]

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/"
  }

  const normalizedPath = pathname.replace(/\/+$/, "")
  return normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`
}

export function findComponentRouteBySlug(slug: string) {
  return allComponentRoutes.find((section) => section.slug === slug)
}

export function findComponentRouteByPath(pathname: string) {
  const normalizedPath = normalizePath(pathname)
  return allComponentRoutes.find((section) => section.path === normalizedPath)
}

export function getComponentPath(slug: string) {
  return findComponentRouteBySlug(slug)?.path ?? defaultComponentRoute.path
}

export function getComponentRouteFromPath(pathname: string) {
  return findComponentRouteByPath(pathname) ?? defaultComponentRoute
}
