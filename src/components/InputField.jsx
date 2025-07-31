import React from "react";

function InputField({ type, placeholder }) {
  return (
    <>
      {" "}
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 px-3 py-2 rounded"
      />
    </>
  );
}

export default InputField;
