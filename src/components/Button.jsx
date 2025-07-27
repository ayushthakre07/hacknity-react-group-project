import React from 'react'

function Button({BtnTitle,onclick}) {
  return (
    <div>
      <button onClick={onclick} className="bg-blue-600 text-white py-3 px-8 rounded-lg text-2xl font-semibold">{BtnTitle}</button>
    </div>
  )
}

export default Button