import React from "react";

function InputField({ type, placeholder, id, name }) {
  return (
    <>
      {" "}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 px-3 py-2 rounded"
      />
    </>
  );
}

export default InputField;
