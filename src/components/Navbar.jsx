import { useState } from "react";
import Logo from "./../../public/logo.png";
import { AlignJustify, KeySquare, X } from "lucide-react";
import { Link } from "react-router";
import { ButtonSecondary } from "./../components/Button";

const NAV_LINKS = [
  { to: "/", navLink: "Home" },
  { to: "/hackathon", navLink: "Hackathon" },
  { to: "/discover", navLink: "Discover" },
  { to: "/about", navLink: "About" },
  { to: "/organize", navLink: "Host a Hackathon" },
];

function Navbar({ openPage }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <nav className="sticky top-0 bg-white flex-col flex lg:flex-row items-center justify-between lg:justify-around gap-5 lg:gap-15 p-5 shadow-lg">
        <div className="flex justify-between w-full item-center">
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={Logo} alt="Logo" className="w-13" />
            <h1 className="text-3xl md:text-4xl font-extrabold font-sans text-gray-800">
              Hacknity
            </h1>
          </div>

          <X
            className={`size-8 ${isHidden ? "hidden" : "block"} lg:hidden`}
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />

          <AlignJustify
            className={`size-8 ${isHidden ? "block" : "hidden"} lg:hidden`}
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />
        </div>

        <div
          className={`${
            isHidden ? "hidden" : "flex"
          } lg:flex flex-col lg:flex-row items-center justify-between gap-5 w-full lg:w-1000 border-2 lg:border-0 border-gray-500 bg-lime-50 lg:bg-white rounded-lg pt-3 pb-4 lg:pt-0 lg:pb-0  text-lg font-semibold `}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-gray-500">
            {NAV_LINKS.map((navObj, index) => {
              const { to, navLink } = navObj;
              return (
                <li
                  key={to}
                  className={`${
                    openPage === to ? "border-b-2 border-lime-500" : ""
                  } cursor-pointer text-center hover:text-black duration-300`}
                  onClick={() => {
                    setIsHidden(true);
                  }}
                >
                  <Link to={to}>{navLink}</Link>
                </li>
              );
            })}{" "}
          </ul>

          <div
            className=" cursor-pointer text-gray-600 hover:text-gray-800 duration-300"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            <ButtonSecondary
              BtnTitle={
                <Link to="/login" className="flex gap-2 item-center ">
                  <p>Login</p>
                  <KeySquare size={18} className="my-auto" />
                </Link>
              }
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
