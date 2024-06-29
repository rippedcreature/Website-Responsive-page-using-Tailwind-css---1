import React from "react";
import { FaBars } from "react-icons/fa";
const Header = () => {

    return (
        <div className="flex justify-between">


            <div className="flex items-center justify-center gap-2">
                <img src="./public/logo.svg" alt="logo" />
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xs text-white px-2.5 py-1.5 rounded-2xl ">Hoster is Hiring</button>
            </div>
            
            <ul className="hidden lg:flex justify-between items-center font-mono text-gray-300 gap-6">
                <li>
                <a href="#">Plans</a>
                </li>
                </ul>
            <ul>
                <li>
                    <a href="#">Find Domain</a>
                </li>
                </ul>
            <ul>
                <li>
                    <a href="#">Why Hosterr</a>
                </li>
            </ul>

            <div className="hiden lg:flex justify-center items-center font-mono gap-6">
                <a className="text-gray-400" href="#">Sign In</a>
                <button className="rounded-md px-4 py-3 bg-blue-600 hover:bg-green-700 text-yellow-50 ">
                    JOin Waitlist
                </button>
            </div>
            <div className="lg:hidden"> 
                <FaBars />
            </div>
        </div>
    )
}

export default Header