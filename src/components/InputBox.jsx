import React from "react";

function InputBox({ placeholder, type, className = "", image }) {
  return (
    <div>
      <div className="flex flex-col  ">
        <input
          type={type}
          placeholder={placeholder}
          required
          className= {`mx-5 my-10 p-3 w-100 text-xl ${className}`}
          
        />
      </div>
    </div>
  );
}

export default InputBox;
