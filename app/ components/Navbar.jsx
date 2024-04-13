"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "About",
        path:"#about",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#EBE3D5] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link 
            href={"/"}  
            className="text-2xl md:text-xl text-[#776B5D] font-semibold">
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border-rounded border border-[#776B5D] text-[#776B5D] hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                       ) : (
                        <button 
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border-rounded border border-[#776B5D] text-[#776B5D] hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                       )
                    }
                </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 text-[#776B5D]">
                    {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul> 
            </div>
    </div>
    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;