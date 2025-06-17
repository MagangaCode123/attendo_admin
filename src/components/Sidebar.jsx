import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { SiPivotaltracker } from "react-icons/si";
import { FaSignOutAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

export function SidebarComponent() {
  return (
    <Sidebar className="h-screen border-solid border-white" aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem className="mb-10" href="#" icon={SiPivotaltracker}>
            Attendo
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            Dashboard
          </SidebarItem>
          <SidebarItem href="#" icon={HiInbox} label="3">
            Inbox
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Employees
          </SidebarItem>
          <SidebarItem href="#" icon={CiCalendar}>
            Calendar
          </SidebarItem>
          <SidebarItem href="#" icon={FaSignOutAlt}>
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
