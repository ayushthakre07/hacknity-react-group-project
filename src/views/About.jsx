import React from 'react'
import Button from '../components/Button'
function About() {
  return (
    
    <div>
      
      <p className='text-[60px] text-center font-bold'>Versatile team masters every <span className='text-lime-500'>challenge!</span></p>
    <div className='text-[40px] text-center text-gray-500 font-semibold pt-4'>Our Mission: Empowering Builders</div>
    <p className='text-2xl text-center px-2 py-10 text-gray-400'>You have the potential to build something that can change the world. We're here to make sure you get your shot. Our project, 
      <span className='cursor-pointer text-lime-500 font-bold'> <a href='https://github.com/Utkarshende/hacknity-react-group-project'target='_blank'>HACKNITY</a></span>, 
      creates opportunities for builders like you. We're excited to help bring your ideas to life.</p>
   



   
   
    <div className='place-items-end-safe pt-[40px] flex flex-wrap px-[50px] py-[50px] border-2 ml-[200px] mr-[200px]' >
      <div className='border-2 border-amber-500 px-4 py-4 rounded-2xl ml-[20px]'>
     <img src='https://avatar.iran.liara.run/public/21' className='size-44  ml-1 '/>
      <p className='py-4 px-10 bg-amber-400 mt-[-10px] rounded-lg'>Ayush Thakre</p>
      <p  className='px-10'>UI/UX Designer</p>
      <div className='flex mt-4 ml-4'>
      <a href='https://www.instagram.com/' target='_blank'>
       <img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png ' className='size-8 bg-gray-300 py-1 px-1 rounded-xl'/></a>
       <a href='' target='_blank'>
       <img src='https://cdn-icons-png.flaticon.com/128/1006/1006771.png' className='size-8 bg-gray-300 py-1 px-1 rounded-xl ml-8'/>  
       </a>
       <a href='' target='_blank'>
       <img src='https://cdn-icons-png.flaticon.com/128/646/646094.png' className='size-8 bg-gray-300 py-1 px-1 rounded-xl ml-8'/></a>
      
      </div>
      </div>

      <div className='border-2 border-amber-500 px-4 py-4 rounded-2xl ml-[150px]'>
     <img src='https://avatar.iran.liara.run/public/21' className='size-44'/>
      <p className='py-4 px-10 bg-amber-400 mt-[-10px] rounded-lg '>Ayush Thakre</p>
      <p  className='px-10'>UI/UX Designer</p>
      <div className='flex mt-4 ml-4 '>
        <a href='' target='_blank'>
      <img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png ' className='size-8 bg-gray-300 py-1 px-1 rounded-xl'/></a>
      <a href='' target='_blank'>
      <img src='https://cdn-icons-png.flaticon.com/128/4494/4494471.png' className='size-8 bg-gray-300 py-1 px-1 rounded-xl ml-8'/></a>
      <a href='' target='_blank'>
      <img src='https://cdn-icons-png.flaticon.com/128/646/646094.png' className='size-8 bg-gray-300 py-1 px-1 rounded-xl ml-8'/></a>
      </div>
      </div>

       <div className='border-2 border-amber-500 px-4 py-4 rounded-2xl ml-[150px]'>
     <img src='https://avatar.iran.liara.run/public/21' className='size-44'/>
      <p className='py-4 px-10 bg-amber-400 mt-[-10px] rounded-lg '>Ayush Thakre</p>
      <p  className='px-10'>UI/UX Designer</p>
      <div className='flex mt-4 ml-4 '>
      <img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png ' className='size-8 bg-gray-300 py-1 px-1 rounded-xl'/>
      <img src='https://cdn-icons-png.flaticon.com/128/11337/11337513.png' className='size-8 bg-gray-300 py-1 px-1 rounded-xl ml-8'/>
      <img src='https://cdn-icons-png.flaticon.com/128/646/646094.png' className='size-8 bg-gray-300 py-1 px-1 rounded-xl ml-8'/>
      </div>
      </div>


      </div>
      <div className='text-center mt-4 text-[60px] font-extrabold text-gray-800'>Join us in our <span className='text-blue-500'>adventures</span> </div>
      <p className='text-center mt-4 text-[40px] ml-60 mr-60 text-gray-600'>Want to join us? We're actively hiring across the board. Get in touch, we would loooove to talk!</p>
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

export default About
