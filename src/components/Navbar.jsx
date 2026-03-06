import React from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({darkMode, setDarkMode}) => {
    return (
        <nav className="bg-linear-to-r from-violet-600 to-purple-500 text-white px-6 py-3 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold tracking-wide">
                Todoist — Manage all your tasks at one place
            </h1>
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-110 transition duration-200">
                {darkMode ? <MdOutlineWbSunny size={20} className="transition-transform duration-300 rotate-180"/> : <MdDarkMode size={20} className="transition-transform duration-300"/>}
            </button>
        </nav>
    )
}

export default Navbar
