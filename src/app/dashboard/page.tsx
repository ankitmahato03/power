import { AppSidebar } from "@/components/app-sidebar";
import TimeBlockChart from "@/components/slide-date-chart";
import DateTimeBlockTable from "@/components/time-selector";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserIcon } from "@/components/user";
import { SIDEBAR_NAV_DATA } from "@/lib/constant";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between p-4 h-16 items-center gap-2 ">
          <div className="flex items-center gap-2 px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <UserIcon user={SIDEBAR_NAV_DATA.user} />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <ActualChart /> */}
          <TimeBlockChart />
          {/* <ActualChart /> */}
          <DateTimeBlockTable />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
