"use client"

import { useEffect , useState } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

  
  return (
        

        <nav
        className={"fixed top-7 left-1/2 transform -translate-x-1/2 bg-stone-800 rounded-full py-2 px-4 z-10 "}
        >
        <div className="flex items-center justify-center ">
            <div className="">
                <a href="#uses" className="text-white mx-4 hover:text-fuchsia-500 ">
                Info
                </a>
            </div>


            <div className="">
                <a href="#articles" className="text-white mx-4 hover:text-fuchsia-500 ">
                Articles
                </a>
            </div>


            <div className="">
                <a href="#projects" className="text-white mx-4 hover:text-fuchsia-500 hover:border-b-fuchsia-500">
                Projects
                </a>
            </div>
        </div>
        </nav>

  );
};

export default Navbar;
