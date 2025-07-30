import React from "react";

function InputField({ type, placeholder }) {
  return (
    <>
      {" "}
      <input type={type} placeholder={placeholder} className="border w-fit" />
    </>
  );
}

export default InputField;
