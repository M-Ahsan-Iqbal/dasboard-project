
import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import Home from '../components/Home';

function Dashbaord(){
    return(
        <>
          <div className="flex flex-col h-screen bg-[#F7F7F7]">
              <Navbar />
            <div className="flex">
              <Sidebar />
              <div className='py-5 px-5 lg:px-8 w-full h-[calc(100vh-85px)] overflow-auto'>
              <Home/>
              </div>
            </div>
           </div>
        </>
    );
};

export default Dashbaord;