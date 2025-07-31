import React from "react";

function TextArea({ name, id, placeholder }) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      className="border border-gray-300 px-3 py-2 rounded"
    ></textarea>
  );
}

export default TextArea;
