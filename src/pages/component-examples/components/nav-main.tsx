"use client"

import type { MouseEvent } from "react"
import { CaretRightIcon } from "@phosphor-icons/react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import type { SectionGroup } from "@/pages/component-examples/routes"
import { Badge } from "@/components/ui/badge"

type NavMainProps = {
  items: SectionGroup[]
  activeSection: string
  onNavigate: (slug: string) => void
}

export function NavMain({
  items,
  activeSection,
  onNavigate,
}: NavMainProps) {
  const { isMobile, setOpenMobile } = useSidebar()

  const handleNavigate = (slug: string) => {
    onNavigate(slug)

    if (isMobile) {
      setOpenMobile(false)
    }
  }

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.shiftKey
    ) {
      return
    }

    event.preventDefault()
    handleNavigate(slug)
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Documentation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                    <CaretRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden pt-1">
                  <SidebarMenuSub>
                    {item.sections.map((section) => (
                      <SidebarMenuSubItem key={section.slug}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={section.slug === activeSection}
                        >
                          <a
                            href={section.path}
                            onClick={(event) => handleLinkClick(event, section.slug)}
                          >
                            <span>{section.title}</span>
                            {section.extra === true && (
                              <Badge className="ml-auto" variant="secondary-neutral">
                                Extra
                              </Badge>
                            )}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
