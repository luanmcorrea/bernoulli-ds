"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { BackpackIcon, BookOpenIcon, ChatCircleDotsIcon, FilesIcon, FolderOpenIcon, HouseIcon, NoteBlankIcon, QuestionIcon, UserPlusIcon } from "@phosphor-icons/react"

export default function SidebarExample() {
  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta"],
    navMain: [
      {
        title: "Menu",
        url: "#",
        items: [
          {
            title: "Início",
            icon: HouseIcon,
            url: "#",
            isActive: true,
          },
          {
            title: "Avaliações",
            icon: FilesIcon,
            url: "#",
          },
          {
            title: "Banco de questões",
            icon: FolderOpenIcon,
            url: "#",
          },
          {
            title: "Componentes",
            icon: BookOpenIcon,
            url: "#",
          },
          {
            title: "Comunicação",
            icon: ChatCircleDotsIcon,
            url: "#",
          },
          {
            title: "Comunicados",
            icon: NoteBlankIcon,
            url: "#",
          },
          {
            title: "Turmas",
            icon: BackpackIcon,
            url: "#",
          },
          {
            title: "Usuários",
            icon: UserPlusIcon,
            url: "#",
          },
          {
            title: "Central de atendimento",
            icon: QuestionIcon,
            url: "#",
          },
        ],
      },
    ],
  }

  const [selectedVersion, setSelectedVersion] = React.useState(data.versions[0])

  return (
    <SidebarProvider className="relative border border-border/60 rounded-xl shadow-xs m-auto overflow-hidden min-h-0 h-95/100 w-95/100">
      <Sidebar collapsible="icon" className="absolute h-full">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <SidebarMenuButton
                      size="lg"
                      className="data-open:bg-accent data-open:text-accent-foreground"
                    />
                  }
                >
                  <Item className="p-0" size="xs">
                    <ItemContent>
                      <ItemTitle className="text-base">Plataform</ItemTitle>
                    </ItemContent>
                  </Item>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {data.versions.map((version) => (
                    <DropdownMenuItem
                      key={version}
                      onSelect={() => setSelectedVersion(version)}
                    >
                      v{version}{" "}
                      {version === selectedVersion && (
                        <IconPlaceholder
                          phosphor="CheckIcon"
                          className="ml-auto"
                        />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        size="lg"
                        className="[&_svg]:size-6"
                        render={<a href={subItem.url} />}
                        isActive={subItem.isActive}
                      >
                        {subItem.icon && <subItem.icon/>}
                        <span>{subItem.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <SidebarMenuButton
                      className="h-fit"
                    />
                  }
                >
                  <Avatar>
                    <AvatarFallback>J</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Johnny</span>
                    <span className="truncate text-xs text-muted-foreground">
                      Profile name
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-(--anchor-width) min-w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <IconPlaceholder
                        lucide="BadgeCheckIcon"
                        tabler="IconRosetteDiscountCheck"
                        hugeicons="CheckmarkBadgeIcon"
                        phosphor="CheckCircleIcon"
                        remixicon="RiCheckboxCircleLine"
                      />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <IconPlaceholder
                        lucide="CreditCardIcon"
                        tabler="IconCreditCard"
                        hugeicons="CreditCardIcon"
                        phosphor="CreditCardIcon"
                        remixicon="RiBankCardLine"
                      />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <IconPlaceholder
                        lucide="BellIcon"
                        tabler="IconBell"
                        hugeicons="NotificationIcon"
                        phosphor="BellIcon"
                        remixicon="RiNotificationLine"
                      />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <IconPlaceholder
                      lucide="LogOutIcon"
                      tabler="IconLogout"
                      hugeicons="LogoutIcon"
                      phosphor="SignOutIcon"
                      remixicon="RiLogoutBoxLine"
                    />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-10">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-6 px-10 pt-2 pb-8">
          <div className="grid auto-rows-min gap-6 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted" />
            <div className="aspect-video rounded-xl bg-muted" />
            <div className="aspect-video rounded-xl bg-muted" />
          </div>
          <div className="flex-1 rounded-xl bg-muted md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}