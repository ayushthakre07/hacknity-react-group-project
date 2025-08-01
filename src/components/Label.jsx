import React from "react";

function Label({ labelTitle, htmlFor, important }) {
  return (
    <label
      htmlFor={"hackathon-title"}
      className="mb-1 text-gray-700 font-medium"
    >
      {labelTitle} {important ? <span className="text-red-500">*</span> : ""}
    </label>
  );
}

export default Label;
