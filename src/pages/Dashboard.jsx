import NavbarComponent from "../components/Navbar.jsx";
import { SidebarComponent } from "../components/Sidebar.jsx";
import Mydropdown from "../components/Dropdown.jsx";
import Piechart from "../components/Piechart.jsx";
import Bargraph from "../components/Bargraph.jsx";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';


export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss")); // Update the time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const options = [{ name: "This week" }, { name: "This Month" }];

  return (
    <>
      <div className="flex flex-row gap-8">
        <div className="w-[15%]">
          <SidebarComponent />
        </div>
        <div className="w-[85%]">
          <NavbarComponent />
          <div className=" flex justify-between p-6">
            <div>
              <h1 className=" text-2xl text-white font-semibold">
               Good Afrenoon Sourav!
              </h1>

              <h1 className="mt-2 text-sm text-gray-500 font-semibold">
                You have 2 leave requests pending
              </h1>
            </div>

            <div className="flex">
              <div>
                <p className=" text-gray-500 text-sm"> Current time</p>
                <p className=" text-2xl font-semibold"> {currentTime} </p>
              </div>

              <div className=" flex w-10 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" flex gap-4 p-6 ">
            <div className=" w-[50%] h-[500px] bg-white border border-gray-400 rounded-xl">
              <div className=" flex justify-between px-4">
                <div>
                  <h1 className=" text-xl font-bold text-black"> My Teams</h1>
                  <p className=" text-sm text-gray-500 ">
                    From 4-10 Sep, 2023
                  </p>
                </div>

                <Mydropdown options={options} />
              </div>
              <Piechart />
            </div>

            <div className=" w-[50%] h-[500px] bg-white  border border-gray-400 rounded-xl">
              <div className=" flex justify-between px-4">
                <div>
                  <h1 className=" text-xl font-bold text-black"> Timings</h1>
                  <p className=" text-sm text-gray-500 ">
                    From 4-10 Sep, 2023
                  </p>
                </div>

                <Mydropdown options={options} />
              </div>
              <Bargraph />
            </div>
          </div>

          <div className=" w-full flex gap-4 p-6 ">
            <div className=" w-[70%]  bg-white border border-gray-400 rounded-xl">
              <div className=" flex justify-between px-4">
                <div className="p-3">
                <h1 className=" text-xl font-bold text-black"> My Teams</h1>
                <p className=" text-sm text-gray-500 "> From 1-30 Sep, 2023</p>
                </div>
                <Mydropdown options={options} />
               </div>

               <div className=" flex w-[95%] mx-auto border-t border-b border-gray-300 py-6 mb-3">
                <div className=" w-[25%] flex items-center  ">
                <img className=" w-10 h-10 rounded-full " src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
" alt="" />
            <div className="pl-4">
              <p className=" font-bold text-black  "> James Gouse</p>
              <p className=" mt-1 text-gray-500 text-[12px]">U/I Designer -UID2</p>
              </div>
             
            
                 </div>
                 <div className="w-[75%] border  p-2">
                 <CalendarHeatmap
                     endDate={new Date('2023-12-01')}
                      startDate={new Date('2023-01-01')}
                      values={[
                        { date: '2023-03-01', count: 12 },
                        { date: '2023-03-22', count: 122 },
                        { date: '2023-03-30', count: 38 },
                      ]}
                      colorForValue={(value) => {
                        if (!value || value.count === 0) return '#f3f4f6';
                        const count = Math.min(4, Math.floor(value.count / 30));
                        const colors = ['#f3f4f6', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563'];
                        return colors[count] || '#f3f4f6';
                      }}
                      showWeekdayLabels={false}
                      showMonthLabels={false}
                      style={{
                        width: '100%',
                        height: '100px',
                      }}
                      gutterSize={1}
                      squareSize={10}
                    />
                    </div>
               </div>
            </div>

            <div className=" w-[30%] bg-white border border-gray-400 rounded-xl py-5 px-3 text-black ">
              <div className=" flex justify-between">
              <h1 className="text-xl font-bold ">Book 1 on 1</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              </div>

              <div className="mt-6">
                
                <div>
                <label for="fname"> <p>Colleagues <span className="text-red-900">*</span></p></label>
                <input className=" border border-black rounded-xl h-10 mt-2 w-[90%] px-3 mx-auto" type="text" id="fname" name="fname" placeholder=" Search..."></input>
                <button className=" w-[90%] py-3 bg-blue-700 rounded-xl text-white mt-7 mx-auto"> Book a meeting</button>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}