import React from "react";

function Button({ BtnTitle, onclick, type }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="cursor-pointer bg-lime-500 text-gray-50 border-transparent px-4 py-2 text-sm sm:px-5 sm:py-2 sm:text-base md:text-lg rounded-lg font-semibold transition shadow-md over:shadow-xl active:translate-y-1"
      >
        {BtnTitle}
      </button>
    </div>
  );
}

function ButtonSecondary({ BtnTitle, onclick, type }) {
  return (
    <div>
      <button
        type={type}
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
