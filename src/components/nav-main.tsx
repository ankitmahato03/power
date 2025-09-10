"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import * as React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import TimeCard from "./time-card";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
}) {
  const [selectedTimes, setSelectedTimes] = React.useState<
    Record<string, string>
  >({});
  // closes dropdown after selecting
  const handleSelectTime = (subItemTitle: string, time: string) => {
    setSelectedTimes((prev) => ({ ...prev, [subItemTitle]: time }));
    // setOpenSubItem(null);
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="mt-6">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuSubButton>
                            {subItem.icon && (
                              <subItem.icon className="w-4 h-4 mr-2" />
                            )}
                            <span>{subItem.title}</span>
                            {selectedTimes[subItem.title] && (
                              <span className="ml-auto text-xs text-gray-500">
                                {selectedTimes[subItem.title]}
                              </span>
                            )}
                          </SidebarMenuSubButton>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align="center"
                          side="right"
                          className="p-0 mt-15 border bg-white shadow-none max-h-[300px] overflow-y-auto"
                        >
                          <TimeCard
                            onSelect={
                              (time) => handleSelectTime(subItem.title, time) // preserves previous selections
                            }
                          />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
