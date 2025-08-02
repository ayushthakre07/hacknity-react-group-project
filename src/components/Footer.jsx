import React from 'react'
import Button from '../components/Button'
function Footer() {
  return (
    <div>
      <br/>
      <br />
      <hr className='border-dotted text-lime-500' />  <br/>
      <div className='text-center md:text-[30px] font-extrabold text-gray-800'>Join us in our <span className='text-lime-500'>adventures</span> </div>
      <p className='text-center mt-4  md:text-[20px] mx-14 text-gray-500'>We invite you to be a part of the HACKNITY journey. Whether you're launching your dream game, discovering new worlds,
        or simply connecting with fellow enthusiasts,
        you'll find a welcoming home here. Explore our features,
        get started with your first host, or reach out to our team - we're excited to have you!</p>
        <br />
      <br />
      <div className=' md:text-3xl font-bold mx-5 px-4 '>
        <h1 className='text-center'>For us, it's all about <span className='text-lime-400'>
           software </span> and the<br /> visionary <span className='text-lime-400'> people</span> who develop it.
        </h1>
       <div/>
       <br/>
       <div className='text-center'>
        <div className='mt-5 px-4'>
      <p className='text-[16px] font-medium text-gray-400'> Engaging & Community-Focused <br/><br/>Join our community!</p>
      <br/>
             <div className='flex justify-center items-center mx-5 '>      
          <a href='https://www.instagram.com/' target='_blank'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png' className='size-[30px] ml-5' /></a>
          <a href='https://github.com/' target='_blank'><img src='https://cdn-icons-png.flaticon.com/128/25/25231.png' className='size-[30px] ml-5' /></a>
         <a href='https://www.roadtocode.org/' target='_blank'> <img src='https://cdn-icons-png.flaticon.com/128/1927/1927656.png' className='size-[30px] ml-5' /></a>
          <a href='https://x.com/' target='_blank'><img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' className='size-[30px] ml-5' /></a>
         <a href='https://www.youtube.com/@roadtocode4u' target='_blank'> <img src='https://cdn-icons-png.flaticon.com/128/1077/1077046.png' className='size-[30px] ml-5' /></a>
          </div>      
        </div> 
        </div>
      </div>
      <br/>
      <br/>
      
          <hr className='border-dotted '/>
          <br/><br/>
          
           <div>
             <h1 className='text-lime-400 text-2xl font-extrabold text-center'>HACKNITY</h1>
        <br/><br/><br/><br/> </div>
    </div>

  )
}

export default Footer
