"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_NAV_DATA } from "@/lib/constant";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const OrgLogo = SIDEBAR_NAV_DATA.org.logo;

  return (
    <Sidebar collapsible="icon" {...props} className="p-4">
      <SidebarHeader>
        <SidebarMenuItem className="flex items-center gap-2  ">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <OrgLogo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">
              {SIDEBAR_NAV_DATA.org.name}
            </span>
            <span className="truncate text-xs">
              {SIDEBAR_NAV_DATA.org.plan}
            </span>
          </div>
        </SidebarMenuItem>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={SIDEBAR_NAV_DATA.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <div className="flex justify-start items-center text-muted-foreground ">
          <p className="text-xs">appV-2.0.0</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
