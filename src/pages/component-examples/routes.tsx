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
import InputOTPExample from "@/pages/component-examples/examples/input-otp-example"
import InputExample from "@/pages/component-examples/examples/input-example"
import LabelExample from "@/pages/component-examples/examples/label-example"
import PaginationExample from "@/pages/component-examples/examples/pagination-example"
import PopoverExample from "@/pages/component-examples/examples/popover-example"
import Page from "@/pages/component-examples/examples/dashboard/page"
import PreviewExample02 from "@/pages/component-examples/examples/preview-02"
import PreviewExample from "@/pages/component-examples/examples/preview"
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
      { slug: "dashboard", title: "Dashboard", path: "/dashboard", component: Page, },
      { slug: "preview", title: "Preview 01", path: "/preview", component: PreviewExample, },
      { slug: "preview-02", title: "Preview 02", path: "/preview-02", component: PreviewExample02, },
    ],
  },
  {
    title: "Components",
    icon: CubeIcon,
    sections: [
      { slug: "accordion", title: "Accordion", path: "/accordion", component: AccordionExample, },
      { slug: "alert", title: "Alert", path: "/alert", component: AlertExample, },
      { slug: "alert-dialog", title: "Alert Dialog", path: "/alert-dialog", component: AlertDialogExample, },
      { slug: "avatar", title: "Avatar", path: "/avatar", component: AvatarExample, },
      { slug: "badge", title: "Badge", path: "/badge", component: BadgeExample, },
      { slug: "breadcrumb", title: "Breadcrumb", path: "/breadcrumb", component: BreadcrumbExample, },
      { slug: "button", title: "Button", path: "/button", component: ButtonExample, },
      { slug: "card", title: "Card", path: "/card", component: CardExample, },
      { slug: "checkbox", title: "Checkbox", path: "/checkbox", component: CheckboxExample, },
      { slug: "combobox", title: "Combobox", path: "/combobox", component: ComboboxExample, },
      { slug: "command", title: "Command", path: "/command", component: CommandExample, },
      { slug: "context-menu", title: "Context Menu", path: "/context-menu", component: ContextMenuExample, },
      { slug: "dialog", title: "Dialog", path: "/dialog", component: DialogExample, },
      { slug: "drawer", title: "Drawer", path: "/drawer", component: DrawerExample, },
      { slug: "dropdown-menu", title: "Dropdown Menu", path: "/dropdown-menu", component: DropdownMenuExample, },
      { slug: "empty", title: "Empty", path: "/empty", component: EmptyExample, },
      { slug: "field", title: "Field", path: "/field", component: FieldExample, },
      { slug: "input", title: "Input", path: "/input", component: InputExample, },
      { slug: "input-otp", title: "Input OTP", path: "/input-otp", component: InputOTPExample, },
      { slug: "label", title: "Label", path: "/label", component: LabelExample, },
      { slug: "pagination", title: "Pagination", path: "/pagination", component: PaginationExample, },
      { slug: "popover", title: "Popover", path: "/popover", component: PopoverExample, },
      { slug: "progress", title: "Progress", path: "/progress", component: ProgressExample, },
      { slug: "radio-group", title: "Radio Group", path: "/radio-group", component: RadioGroupExample, },
      { slug: "select", title: "Select", path: "/select", component: SelectExample, },
      { slug: "sheet", title: "Sheet", path: "/sheet", component: SheetExample, },
      { slug: "sidebar", title: "Sidebar", path: "/sidebar", component: SidebarExample, },
      { slug: "skeleton", title: "Skeleton", path: "/skeleton", component: SkeletonExample, },
      { slug: "slider", title: "Slider", path: "/slider", component: SliderExample, },
      { slug: "sonner", title: "Sonner", path: "/sonner", component: SonnerExample, },
      { slug: "switch", title: "Switch", path: "/switch", component: SwitchExample, },
      { slug: "table", title: "Table", path: "/table", component: TableExample, },
      { slug: "tabs", title: "Tabs", path: "/tabs", component: TabsExample, },
      { slug: "textarea", title: "Textarea", path: "/textarea", component: TextareaExample, },
      { slug: "tooltip", title: "Tooltip", path: "/tooltip", component: TooltipExample, },
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
