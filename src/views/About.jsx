import React from 'react'

function About() {
  return (
    <div>
      <p className='text-[60px] text-center font-bold'>Versatile team masters every <span className='text-lime-500'>challenge!</span></p>
    <div className='text-[40px] text-center text-gray-500 font-semibold pt-4'>Our Mission: Empowering Builders</div>
    <p className='text-2xl text-center px-2 pt-10 text-gray-400'>You have the potential to build something that can change the world. We're here to make sure you get your shot. Our project, 
      <span className='cursor-pointer text-lime-500 font-bold'> <a href='https://github.com/Utkarshende/hacknity-react-group-project'target='_blank'>HACKNITY</a></span>, creates opportunities for builders like you. We're excited to help bring your ideas to life.</p>
    <div className='place-items-end-safe pt-8 flex' >
      <img src='https://avatar.iran.liara.run/public/21' className='size-44 '/>
      <p className='bg-amber-200 ' >Ayush Thakre</p>
        <img src='https://avatar.iran.liara.run/public/21' className='size-44'/>
      <p className='bg-amber-200'>Gajanan Jadhav</p>
       <img src='https://avatar.iran.liara.run/public/21' className='size-44 '/>
      <p className='bg-amber-200 ' >Srushti Wanjari</p>
        <img src='https://avatar.iran.liara.run/public/21' className='size-44'/>
      <p className='bg-amber-200'>Mahesh Jadhav</p>
       <img src='https://avatar.iran.liara.run/public/21' className='size-44 '/>
      <p className='bg-amber-200 ' >Ravikant Tarare</p>
        <img src='https://avatar.iran.liara.run/public/21' className='size-44'/>
      <p className='bg-amber-200'>Utkarsha Shende </p>
      </div>
    </div>
  )
}

export default About
