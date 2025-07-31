import { useState } from "react";
import Logo from "./../../public/logo.png";
import { AlignJustify, KeySquare, X } from "lucide-react";
import { Link } from "react-router";

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
            <img src={Logo} alt="Logo" className="w-8" />
            <h1 className="text-3xl font-extrabold font-sans text-lime-400">
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
          } lg:flex flex-col lg:flex-row items-center justify-between gap-5 w-full lg:w-1000 border-2 lg:border-0 border-gray-400 rounded-lg p-3  text-lg font-semibold `}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-gray-500">
            {NAV_LINKS.map((navObj, index) => {
              const { to, navLink } = navObj;
              return (
                <li
                  key={to}
                  className={`${
                    openPage === to
                      ? "border-b-2 border-lime-400"
                      : "border-b-2 border-transparent"
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
            className=" cursor-pointer text-gray-600 hover:text-black duration-300"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            <Link
              to="/login"
              className="flex gap-2 item-center border px-3 py-1 rounded-md"
            >
              <p>Login</p>
              <KeySquare size={18} className="my-auto" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
