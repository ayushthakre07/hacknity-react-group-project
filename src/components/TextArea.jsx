import React from "react";

function TextArea({ name, id, placeholder, onchange }) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onchange}
      className="border border-gray-300 px-3 py-2 rounded focus:outline-lime-500"
    ></textarea>
  );
}

export default TextArea;
