import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import NavbarComponent from "../components/Navbar.jsx";
import { SidebarComponent } from "../components/Sidebar.jsx";


export default function Dashboard() {
   return(
    <>
    <div className="flex flex-row gap-8">
      <div className="w-[15%]">
        <SidebarComponent />
      </div>
      <div className="w-[85%]">
      <NavbarComponent />
      </div>
    
    </div>
    </>

    
   )
}                  