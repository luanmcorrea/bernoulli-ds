"use client"

import { CaretDownIcon, CheckIcon, CircleIcon } from "@phosphor-icons/react"

import { useBrandTheme } from "@/components/brand-theme-provider"
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
  ItemTitle,
} from "@/components/ui/item"
import {
  getBrandThemeOption,
  getProfileThemeOption,
  profileThemeOptions,
} from "@/lib/brand-themes"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function ProfileSwitcher() {
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
                <CircleIcon
                  weight="fill"
                  className="size-4 text-sidebar-primary"
                />
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
                  <span>{profile.label}</span>
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
