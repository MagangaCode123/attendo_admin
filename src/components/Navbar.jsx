import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { SearchBar } from "./SearchBar";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";


export default function NavbarComponent () {

    return( 
        <>      
         <section >
              <Navbar  fluid rounded>
                <NavbarBrand  href="https://flowbite-react.com">
                  {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" /> */}
                 <NavbarBrand>
                 <NavbarToggle />
                <NavbarCollapse>
                  <NavbarLink href="#" active>
                   Dashboard
                  </NavbarLink>
                  <NavbarLink  href="#">
                    Leave
                  </NavbarLink>
                  <NavbarLink href="#">Attendance</NavbarLink>
                  <NavbarLink href="#">Perfomance</NavbarLink>
              
                </NavbarCollapse>
                 </NavbarBrand>
                </NavbarBrand>
                <NavbarBrand className="mr-8">
                  <div className="flex flex-row gap-6 items-center">
                  <SearchBar />

                  <MdMarkEmailUnread size={25}/>

                  <IoNotifications  size={25}/>

                  <IoMdContact size={25}/>
                  </div>
                </NavbarBrand>
              </Navbar>
         </section>  
    
              </>
  
      );
}