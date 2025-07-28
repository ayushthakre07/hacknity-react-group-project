import React from "react";
import Logo from "./../../public/logo.png";
import { AlignJustify } from "lucide-react";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between md:justify-around gap-0 md:gap-15 p-5">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={Logo} alt="Logo" className="w-8" />
          <h1 className="text-3xl font-extrabold font-sans">Hacknity</h1>
        </div>
        <div className="hidden md:flex items-center justify-between w-200  text-lg font-semibold ">
          <ul className="flex gap-8 text-gray-500">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">Hackathon</li>
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Dashboad</li>
          </ul>{" "}
          <p className=" cursor-pointer">Login</p>
        </div>
        <AlignJustify className="size-8 md:hidden" />
      </nav>
    </>
  );
}

export default Navbar;
