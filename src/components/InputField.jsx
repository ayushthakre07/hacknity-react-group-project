import React from "react";

function InputField({ type, placeholder, id, name, onchange }) {
  return (
    <>
      {" "}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
        className="border border-gray-300 px-3 py-2 rounded focus:outline-lime-500"
      />
    </>
  );
}

export default InputField;
