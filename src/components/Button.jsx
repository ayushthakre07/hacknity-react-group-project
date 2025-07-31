import React from "react";

function Button({ BtnTitle, onclick }) {
  return (
    <div>
      <button onClick={onclick} className="bg-[#D1EE6B] py-2 px-4 rounded-md pointer-coarse:p-4 ">{BtnTitle}</button>
    </div>
  );
}

function ButtonSecondary({ BtnTitle, onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="cursor-pointer text-lime-500 border-2 px-4 py-2 text-sm sm:px-5 sm:py-2 sm:text-base md:text-lg rounded-lg font-semibold transition shadow-md hover:shadow-xl active:translate-y-1"
      >
        {BtnTitle}
      </button>
    </div>
  );
}

export default Button;
export { ButtonSecondary };
