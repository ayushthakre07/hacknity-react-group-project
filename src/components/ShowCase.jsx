import React from "react";
import { Link } from "react-router";

function ShowCase({
  number,
  color1,
  color2,
  color3,
  color4,
  color5,
  heading,
  description,
  buttonText,
  link,
}) {
  return (
      <div>
        <div className="flex gap-3 mt-20 mb-7">
          <div className={`w-16 h-16 ${color1} rounded-full flex items-center justify-center text-white text-5xl font-bold`}>
            {number}
          </div>
          <div className={`w-40 h-16 ${color2} rounded-full`}></div>
          <div className={`w-16 h-16 ${color3} rounded-full`}></div>
        </div>

        <div className="whitespace-pre-line text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          {heading}
        </div>

        <p className="text-xl whitespace-pre-line mb-5">{description}</p>

        <Link
          to={link}
           className="cursor-pointer text-lime-500 border-2 px-4 py-2 text-sm sm:px-5 sm:py-2 sm:text-base md:text-lg rounded-lg font-semibold transition shadow-md hover:shadow-xl active:translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
  
  );
}

export default ShowCase;
