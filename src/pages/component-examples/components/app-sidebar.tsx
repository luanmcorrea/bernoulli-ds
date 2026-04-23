"use client"

import { useBrandTheme } from "@/components/brand-theme-provider"
import { getBrandThemeOption } from "@/lib/brand-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { NavMain } from "@/pages/component-examples/components/nav-main"
import { ProfileSwitcher } from "@/pages/component-examples/components/profile-switcher"
import type { SectionGroup } from "@/pages/component-examples/routes"
import { ThemeSwitcher } from "@/pages/component-examples/components/theme-switcher"

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  items: SectionGroup[]
  activeSection: string
  onNavigate: (slug: string) => void
}

export function AppSidebar({
  items,
  activeSection,
  onNavigate,
  ...props
}: AppSidebarProps) {
  const { brandTheme, setBrandTheme } = useBrandTheme()
  const selectedTheme = getBrandThemeOption(brandTheme)

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <ThemeSwitcher
          selectedTheme={selectedTheme}
          onSelectTheme={(theme) => setBrandTheme(theme.id)}
        />
        <ProfileSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={items}
          activeSection={activeSection}
          onNavigate={onNavigate}
        />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
