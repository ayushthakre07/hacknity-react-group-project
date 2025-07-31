import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function About() {

 const teamMembers = [
      {
      name: 'Gajanan Jadhav', 
      role: 'Manager', 
      profilephoto: 'https://profilephoto.iran.liara.run/public/22', 
      social: [
        { url: 'https://www.instagram.com/', icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png' },
        {  url: 'https://twitter.com/', icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494471.png' },
        {  url: 'https://github.com/', icon: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' },
      ]
    },
    {
      name: 'Mahesh Jadhav', 
      role: ' Team Leader', 
      profilephoto: 'https://profilephoto.iran.liara.run/public/22', 
      social: [
        { url: 'https://www.instagram.com/', icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png' },
        {  url: 'https://twitter.com/', icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494471.png' },
        {  url: 'https://github.com/', icon: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' },
      ]
    },
    {
      name: 'Srushti Wanjari', 
      role: ' Developer', 
      profilephoto: 'https://profilephoto.iran.liara.run/public/22', 
      social: [
        { url: 'https://www.instagram.com/', icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png' },
        {  url: 'https://twitter.com/', icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494471.png' },
        {  url: 'https://github.com/', icon: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' },
      ]
    },
   {
      name: 'Ravikant Tarare', 
      role: 'Developer', 
      profilephoto: 'https://profilephoto.iran.liara.run/public/22', 
      social: [
        { url: 'https://www.instagram.com/', icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png' },
        {  url: 'https://twitter.com/', icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494471.png' },
        {  url: 'https://github.com/', icon: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' },
      ]
    },
       {
      name: 'Ayush Thakre', 
      role: 'UI/UX Designer', 
      profilephoto: 'https://profilephoto.iran.liara.run/public/22', 
      social: [
        { url: 'https://www.instagram.com/', icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png' },
        {  url: 'https://twitter.com/', icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494471.png' },
        {  url: 'https://github.com/', icon: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' },
      ]
    },
      {
      name: 'Utkarsh Shende', 
      role: 'Developer', 
      profilephoto: 'https://profilephoto.iran.liara.run/public/22', 
      social: [
        { url: 'https://www.instagram.com/', icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png' },
        {  url: 'https://twitter.com/', icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494471.png' },
        {  url: 'https://github.com/', icon: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' },
      ]
    }
  
  ];

  return (
    
    <div>
      <Navbar/>
      
      <p className='text-[80px] text-center font-bold'>Versatile team masters every <span className='text-lime-500 transition-colors'>challenge!</span></p>
    
   <p>
    <h1 className='text-6xl my-4 text-center text-gray-400'>Our mission is to provide an<br/>
       intuitive, robust and community-driven platform <br/>for both 
        <span className='text-fuchsia-400 font-extrabold hover:text-fuchsia-500'>   online </span> 
        and <span className='text-indigo-400 font-extrabold hover:text-indigo-500'>offline</span> game hosting.</h1>
        <br/>
        <hr className='border-dotted'/>
       <br/> <h2 className='text-6xl font-bold text-center'> We are committed to </h2>
<ol className='ml-6 my-6 text-[25px] font-light'>
<li className="py-2 text-gray-500"><span className='text-4xl font-bold text-lime-500'> Empowering Creators:</span><br/>  Offering tools and resources that simplify the hosting process, allowing developers to focus on what they do best - making great games.
</li>
<li className="py-2 text-gray-500 "><span className='text-4xl font-bold text-lime-500'>Enhancing Player Experience:</span> <br/> Ensuring stable, low-latency, and diverse gaming environments for players worldwide.
 </li>
 <li className="py-2  text-gray-500">
<span className='text-4xl font-bold text-lime-500'>Fostering Community: </span> <br/>Building a supportive ecosystem where developers can share, learn, and grow, and players can discover new favorites and connect with fellow enthusiasts.
 </li>
</ol>
</p>
<hr className='border-dotted'/>
<br/>
<div >
  <h1 className='text-6xl font-extrabold text-center '>What We Offer</h1>
  <br/>
  <h2 className='text-center text-[45px] font-bold text-gray-600'> HACKNITY is designed to cater to a wide spectrum of hosting needs. </h2>
    <br/><span className='text-4xl text-gray-500 ml-9 font-medium'>Here's what makes us the ideal choice for your game hosting :</span>
    
 <br/>

<br/>
  <h1  className='text-4xl font-extrabold ml-9 text-lime-500'>For Online Games</h1><br/>
 <div className='text-2xl ml-8 text-gray-500 font-light'>
 <p ><span  className=' text-black '>Robust Server Infrastructure:</span><br/> Our infrastructure is built for scalability, capable of handling sudden 
  spikes in player numbers without a hitch.</p>

<p><span className=' text-black '>Easy Deployment & Management:</span> <br/>Our user-friendly dashboard allows for quick game uploads, 
  server configuration, and real-time monitoring. You don't need to be a server expert to get your game online.</p>

 </div> 
<br/>
<h1  className='text-4xl font-extrabold ml-9 text-lime-500'>
  For Offline Games
</h1>
<br/>
<div className='text-2xl ml-8  text-gray-500 font-light'>
<p><span className=' text-black '> Secure Content Delivery: </span> Even for offline games, secure and efficient content delivery is crucial. We provide reliable hosting for your game files, ensuring players can download your game quickly and safely.</p>
<p><span className=' text-black '> Version Control & Updates:</span> Easily manage different versions of your game and push updates to your player base with our streamlined system.</p>
</div>
<br/>
<hr/>
<br/>
</div>   
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
      
      <p className='py-4 px-10 bg-amber-300 mt-[-10px] rounded-lg'>{member.name}</p>
      <p  className='px-10 text-center'>{member.role}</p>


      <div className='flex mt-4 ml-1 px-2'>
        {member.social.map((socialLink) => (
      <a href={socialLink.url} 
      target='_blank'>
       <img src={socialLink.icon}
        className='size-8 ml-4 bg-gray-200 p-1 rounded-xl transition-transform duration-200 hover:scale-120 hover:bg-gray-300'/></a>
        ))}
      </div>
      </div>   
      </div>
      </div>
</div>

  )
}

export default About;
