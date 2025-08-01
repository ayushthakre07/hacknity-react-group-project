import React from 'react'
import Button from '../components/Button'
function Footer() {
  return (
    <div>
      <br />
      <hr className='border-dotted' />
      <div className='text-center text-[60px] font-extrabold text-gray-800'>Join us in our <span className='text-lime-500'>adventures</span> </div>
      <p className='text-center mt-4 text-[30px] mx-14 text-gray-500'>We invite you to be a part of the HACKNITY journey. Whether you're launching your dream game, discovering new worlds,
        or simply connecting with fellow enthusiasts,
        you'll find a welcoming home here. Explore our features,
        get started with your first host, or reach out to our team - we're excited to have you!</p>
      <div className='text-center mt-4'>
        <Button BtnTitle={"Get in touch"} />
      </div>
      <br />
      <div>
        Engaging & Community-Focused
        Join our community! [Social Media Links/Icons]

        Questions? We're here to help! [Link to Contact Us]

        Made for you, by us. [Link to About Us]
      </div>
      <br />
      <div className='text-7xl font-bold ml-[30px] mx-5 flex bg-lime-500 px-4'>
        <h1>For us, it's all about<span className='text-white'>
          <br />software </span> and the<br /> visionary <span className='text-white'> people</span><br /> who develop it.
        </h1>
        <div className='ml-66 mt-26 flex px-4'>
          <img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png' className='size-[50px]' />
          <img src='https://cdn-icons-png.flaticon.com/128/25/25231.png' className='size-[50px] ml-10' />
          <img src='https://cdn-icons-png.flaticon.com/128/1927/1927656.png' className='size-[50px] ml-10' />
          <img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' className='size-[50px] ml-10' />
          <img src='https://cdn-icons-png.flaticon.com/128/1077/1077046.png' className='size-[50px] ml-10' />
        </div>
      </div>
    </div>

  )
}

export default Footer
