
import React from 'react';
import notification from '../assets/icons/notification.png';
import Ellipse from '../assets/images/Ellipse.png'
import logo from '../assets/images/logo.png'

function Navbar(){
    return(
        <>
           <nav className="flex flex-1 flex-col h-screen bg-gray-100 border-b border-primary">
            <div className="bg-white p-4 flex items-center justify-between">
                    <img src={logo} alt="My Icon" />
                    <div className="flex items-center space-x-4">
                        <img src={notification} alt="My Icon" />
                        <img src={Ellipse} alt="My Icon" />
                    </div>
                </div>
           </nav>
        </>
    )
}

export default Navbar;