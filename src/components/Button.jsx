import React from 'react'

function Button({BtnTitle,onclick}) {
  return (
    <div>
      <button onClick={onclick} className='bg-amber-500'>{BtnTitle}</button>
    </div>
  )
}

export default Button