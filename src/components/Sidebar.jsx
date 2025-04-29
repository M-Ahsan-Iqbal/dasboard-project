
import React from 'react';
import person from '../assets/icons/person.png';
import register from '../assets/icons/register.png';
import list from '../assets/icons/list.png';
import file from '../assets/icons/file.png';
import settings from '../assets/icons/settings.png';
import logout from '../assets/icons/logout.png';
import dashboardwhite from '../assets/icons/dashboardwhite.png';
import { useState } from 'react';

function Sidebar(){

    const [show, setShow] = useState(true);
    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setShow(!show);
    }

    return(
        <>
            {/* sidebar */}
            <aside className={`bg-[#F7F7F7] h-[calc(100vh-85px)] overflow-auto p-6 shadow-lg shrink-0 transition-all duration-300 ease-in-out ${show ? "w-[312px]" : "w-[136px] overflow-hidden"}`}>
                {/* aside header */}
                <div className="text-right">
                    <button onClick={toggleNav} className="text-caption bg-white rounded-full p-1 px-2 w-[88px] text-[#888888] cursor-pointer">{show ? '<< Minimize' : 'Expand >>'}</button>
                </div>

              <div className="flex flex-col justify-start gap-10 mt-3">
              <ul className={`rounded-lg bg-white p-4`}>
                <li onClick={() => setActive("dashboard")} className={`p-4 hover:text-white text-[#575757] hover:bg-primary cursor-pointer rounded-lg ${active === "dashboard" ? 'bg-primary' : 'bg-white'}`}>
                    <a className="flex items-center">
                        <img src={dashboardwhite} alt="" width="24"/>
                        <span className={`text-body-md transition-all duration-300 ease-in-out ${
                                  show ? "opacity-100 w-auto pl-2.5" : "opacity-0 w-0 leading-0"}`}>Dashbaord</span>
                    </a>
                </li>
                </ul>
                </div>

                {/* aside-nar */}
                <nav className="flex flex-col gap-10 my-3">
                    <ul className={`rounded-lg bg-white p-4`}>
                                        <li onClick={() => setActive("visits")} className={`p-4 hover:text-white text-[#575757] hover:bg-primary cursor-pointer rounded-lg ${active === "visits" ? 'bg-primary' : 'bg-white'}`}>

                            <a className="flex items-center">
                                <img src={person} alt="" width="24"/>
                                <span className={`text-nowrap text-body-md transition-all duration-300 ease-in-out ${
                                  show ? "opacity-100 w-auto pl-2.5" : "opacity-0 w-0 leading-0"}`}>My Visits</span>
                            </a>
                        </li>
                                        <li onClick={() => setActive("register")} className={`p-4 hover:text-white text-[#575757] hover:bg-primary cursor-pointer rounded-lg ${active === "register" ? 'bg-primary' : 'bg-white'}`}>

                            <a className="flex items-center">
                                <img src={register} alt="" width="24"/>
                                <span className={`text-nowrap text-body-md transition-all duration-300 ease-in-out ${
                                  show ? "opacity-100 w-auto pl-2.5" : "opacity-0 w-0 leading-0"}`}>Register new account</span>
                            </a>
                        </li>
                                        <li onClick={() => setActive("orders")} className={`p-4 hover:text-white text-[#575757] hover:bg-primary cursor-pointer rounded-lg ${active === "orders" ? 'bg-primary' : 'bg-white'}`}>

                            <a className="flex items-center">
                                <img src={list} alt="" width="24"/>
                                <span className={` text-body-md transition-all duration-300 ease-in-out ${
                                  show ? "opacity-100 w-auto pl-2.5" : "opacity-0 w-0 leading-0"}`}>Orders</span>
                            </a>
                        </li>
                                        <li onClick={() => setActive("reports")} className={`p-4 hover:text-white text-[#575757] hover:bg-primary cursor-pointer rounded-lg ${active === "reports" ? 'bg-primary' : 'bg-white'}`}>

                            <a className="flex items-center">
                                <img src={file} alt="" width="24"/>
                                <span className={` text-body-md transition-all duration-300 ease-in-out ${
                                  show ? "opacity-100 w-auto pl-2.5" : "opacity-0 w-0 leading-0"}`}>Reports</span>
                            </a>
                        </li>
                    </ul>
                </nav>       

                {/* aside-footer */}
                <div className='rounded-lg bg-white'>
                    <ul className={`rounded-lg mt-4 flex flex-col p-4`}>
                                    <li onClick={() => setActive("settings")} className={`p-4 hover:text-white text-[#575757] hover:bg-primary cursor-pointer rounded-lg ${active === "settings" ? 'bg-primary' : 'bg-white'}`}>

                            <a className="flex items-center">
                                <img src={settings} alt="" width="24"/>
                                <span className={` text-body-md transition-all duration-300 ease-in-out ${
                                  show ? "opacity-100 w-auto pl-2.5" : "opacity-0 w-0 leading-0"}`}>Settings</span>
                            </a>
                        </li>
                                        <li onClick={() => setActive("logout")} className={`p-4 hover:text-white text-[#575757] hover:bg-primary cursor-pointer rounded-lg ${active === "logout" ? 'bg-primary' : 'bg-white'}`}>

                            <a className="flex items-center">
                                <img src={logout} alt="" width="24"/>
                                <span className={` text-body-md transition-all duration-300 ease-in-out ${
                                  show ? "opacity-100 w-auto pl-2.5" : "opacity-0 w-0 leading-0"}`}>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
           </aside>
        </>
    )
}

export default Sidebar;