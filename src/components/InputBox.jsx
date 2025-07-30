import React from "react";

function InputBox({ placeholder, type, className = "", image }) {
  return (
    <div>
      <div className="flex flex-col  ">
        <input
          type={type}
          placeholder={placeholder}
          required
          className= {`mx-5 my-5 p-3 w-80 text-xl border-2 ${className}  rounded-2xl`}
        />
      </div>
    </div>
  );
}

export default InputBox;
