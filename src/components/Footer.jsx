import React from 'react'
import Button from '../components/Button'
function Footer() {
  return (
    <div>
      <div className='text-center mt-4 text-[60px] font-extrabold text-gray-800'>Join us in our <span className='text-lime-500'>adventures</span> </div>
      <p className='text-center mt-4 text-[30px] mx-14 text-gray-600'>We invite you to be a part of the HACKNITY journey. Whether you're launching your dream game, discovering new worlds,
 or simply connecting with fellow enthusiasts, 
you'll find a welcoming home here. Explore our features,
 get started with your first host, or reach out to our team - we're excited to have you!</p>
      <div className='text-center mt-4'>
      <Button BtnTitle={"Get in touch"} />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='text-7xl font-bold ml-[150px]'>
        We love <span className='text-blue-300'>software</span> <br/>and the <span className='text-orange-300'>people</span>  who<br/> build them.
      </div>
    </div>
    
  )
}

export default Footer
