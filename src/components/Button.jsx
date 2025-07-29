import React from 'react'

function Button({BtnTitle,onclick}) {
  return (
    <div>
      <button onClick={onclick} className="bg-[#D1EE6B] py-2 px-4 rounded-md">{BtnTitle}</button>
    </div>
  )
}

export default Button