import React from 'react'

function Button({BtnTitle,onclick}) {
  return (
    <div>
      <button onClick={onclick} className="bg-[#D1EE6B] py-2 px-4">{BtnTitle}</button>
    </div>
  )
}

export default Button