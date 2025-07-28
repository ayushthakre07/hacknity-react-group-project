import { useState } from "react";
import Logo from "./../../public/logo.png";
import { AlignJustify } from "lucide-react";

function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between md:justify-around gap-5 md:gap-15 p-5">
        <div className="flex justify-between w-full item-center">
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={Logo} alt="Logo" className="w-8" />
            <h1 className="text-3xl font-extrabold font-sans">Hacknity</h1>
          </div>

          <AlignJustify
            className="size-8 md:hidden"
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />
        </div>

        <div
          className={`${
            isHidden ? "hidden" : "flex"
          } md:flex flex-col md:flex-row items-center justify-between gap-5 w-full md:w-500 border-2 md:border-0 border-gray-400 rounded-lg p-3  text-lg font-semibold `}
        >
          <ul className="flex flex-col md:flex-row gap-5 md:gap-8 text-gray-500">
            <li
              className=" cursor-pointer w-23 md:w-fit"
              onClick={() => {
                setIsHidden(true);
              }}
            >
              Home
            </li>
            <li
              className=" cursor-pointer w-23 md:w-fit"
              onClick={() => {
                setIsHidden(true);
              }}
            >
              Hackathon
            </li>
            <li
              className=" cursor-pointer w-23 md:w-fit"
              onClick={() => {
                setIsHidden(true);
              }}
            >
              About
            </li>
            <li
              className=" cursor-pointer w-23 md:w-fit"
              onClick={() => {
                setIsHidden(true);
              }}
            >
              Dashboad
            </li>
          </ul>{" "}
          <p
            className=" cursor-pointer w-23 md:w-fit text-gray-500"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Login
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
