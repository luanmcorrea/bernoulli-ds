"use client"

import { CaretDownIcon, CheckIcon, SwatchesIcon } from "@phosphor-icons/react"

import { brandThemeOptions, type BrandThemeOption } from "@/lib/brand-themes"
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type ThemeSwitcherProps = {
  selectedTheme: BrandThemeOption
  onSelectTheme: (theme: BrandThemeOption) => void
}

export function ThemeSwitcher({
  selectedTheme,
  onSelectTheme,
}: ThemeSwitcherProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger render={<SidebarMenuButton size="lg" />}>
            <Item className="gap-2 p-0">
              <div className="flex size-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <SwatchesIcon />
              </div>
              <ItemContent className="gap-0">
                <ItemTitle>{selectedTheme.name}</ItemTitle>
                <ItemDescription className="text-xs">
                  {selectedTheme.platform}
                </ItemDescription>
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
