import React from "react";

function Label({ labelTitle, htmlFor }) {
  return (
    <label
      htmlFor={"hackathon-title"}
      className="mb-1 text-gray-700 font-medium"
    >
      {labelTitle}
    </label>
  );
}

export default Label;
