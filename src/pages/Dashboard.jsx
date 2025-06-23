import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import NavbarComponent from "../components/Navbar.jsx";
import { SidebarComponent } from "../components/Sidebar.jsx";
import Mydropdown from "../components/Dropdown.jsx";
import Piechart from "../components/Piechart.jsx";
import Bargraph from "../components/Bargraph.jsx";


export default function Dashboard() {
  
const options = [
  {name: "This week"},
   {name: "This Month"},
 ]


   return(
    <>
    <div className="flex flex-row gap-8">
      <div className="w-[15%]">
        <SidebarComponent />
      </div>
      <div className="w-[85%]">
      <NavbarComponent />
        <div className=" flex justify-between p-6">
          <div>
            <h1 className=" text-2xl text-blue-900 font-semibold"> Good Afrenoon Sourav!</h1>
            
            <h1 className="mt-2 text-sm text-gray-500 font-semibold"> You have 2 leave requests pending</h1>           
            </div>

            <div className="flex">
              <div>
                <p className=" text-gray-500 text-sm"> Current time</p>
                <p className=" text-2xl font-semibold"> 12:10 PM</p>
              </div>

              <div className=" flex w-10 justify-center items-center">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              </div>

            </div>

        </div>

        <div className=" flex gap-4 p-6 ">
          <div className=" w-[50%] h-[500px] bg-white border border-gray-400 rounded-xl">
            <div className=" flex justify-between px-4">
              <div>
                <h1 className=" text-xl font-bold text-black"> My Teams</h1>
                <p className=" text-sm text-gray-500 "> From 4-10 Sep, 2023</p>
              </div>

              < Mydropdown options={ options} /> 

             

            </div>
            < Piechart   />
          </div>

          <div className=" w-[50%] h-[500px] bg-white  border border-gray-400 rounded-xl">
          <div className=" flex justify-between px-4">
              <div>
                <h1 className=" text-xl font-bold text-black"> Timings</h1>
                <p className=" text-sm text-gray-500 "> From 4-10 Sep, 2023</p>
              </div>

              < Mydropdown options={ options} /> 

            </div>
            < Bargraph/>

          </div>

        </div>
      


      </div>
    
    </div>
    </>

    
   )
}                  