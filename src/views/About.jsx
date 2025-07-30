import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

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
      
      <p className='text-[60px] text-center font-bold'>Versatile team masters every <span className='text-lime-500 transition-colors'>challenge!</span></p>
    <div className='text-[40px] text-center text-gray-500 font-semibold pt-4'>Our Mission: Empowering Builders</div>
    <p className='text-2xl text-center px-2 py-10 text-gray-400'>At HACKNITY, our vision is to democratize game hosting,
       making it accessible and empowering for everyone. We believe that creativity knows no bounds, and every game, 
      big or small, deserves a seamless and reliable platform to reach its audience.</p>
   <p>
    <h1 className='text-6xl mx-14 mb-6 font-extralight'>Our mission is to provide an<br/>
       intuitive, robust and community-driven platform <br/>for both <span className='text-fuchsia-400 font-extrabold'>online </span> and <span className='text-indigo-400 font-extrabold'>offline</span> game hosting.<br/> We are committed to:</h1>
<ol className='ml-6 my-6 text-[25px] font-medium'>
<li className="py-2"><span className='text-4xl font-bold text-amber-400'> Empowering Creators:</span>  Offering tools and resources that simplify the hosting process, allowing developers to focus on what they do best – making great games.
</li>
<li className="py-2 "><span className='text-4xl font-bold text-amber-400'>Enhancing Player Experience:</span> Ensuring stable, low-latency, and diverse gaming environments for players worldwide.
 </li>
 <li className="py-2">
<span className='text-4xl font-bold text-amber-400'>Fostering Community: </span>Building a supportive ecosystem where developers can share, learn, and grow, and players can discover new favorites and connect with fellow enthusiasts.
 </li>
</ol>
</p>
<hr/>
<br/>
<div >
  <h1 className='text-6xl font-extrabold text-center outline-6'>What We Offer</h1>
  <br/>
  <h2 className='text-center text-4xl font-bold '> HACKNITY is designed to cater to a wide spectrum of hosting needs. 
    <br/>
    <br/>Here's what makes us the ideal choice for your game hosting:</h2>
    
  <br/>
<hr  className='border-dotted'/>
<br/>
  <h1  className='text-4xl font-extrabold text-center '>For Online Games</h1><br/>
  <p>Robust Server Infrastructure: We utilize state-of-the-art servers located globally to ensure minimal latency and maximum uptime for your online games. Our infrastructure is built for scalability, capable of handling sudden spikes in player numbers without a hitch.

<p>Easy Deployment & Management: Our user-friendly dashboard allows for quick game uploads, server configuration, and real-time monitoring. You don't need to be a server expert to get your game online.
</p>
<p>Customizable Server Options: Tailor your server settings to match your game's unique requirements. From player limits to custom rules, you have full control.</p>
</p>
<br/>
<hr className='border-dotted'/>
<br/>
<h1  className='text-4xl font-extrabold text-center '>
  For Offline Games
</h1>
<br/>
<p> Secure Content Delivery: Even for offline games, secure and efficient content delivery is crucial. We provide reliable hosting for your game files, ensuring players can download your game quickly and safely.</p>
<p>Version Control & Updates: Easily manage different versions of your game and push updates to your player base with our streamlined system</p>
<br/>
<hr/>
<br/>
</div>
   
    <div className='place-items-end-safe pt-[40px] flex flex-wrap px-[50px] py-[50px] ml-[200px] mr-[200px] border-2 ' >
    
      {teamMembers.map((member)=>(

         <div className='border-2 border-gray-800 px-4 py-4 rounded-2xl ml-[80px] mt-12 items-center'>
     <img src={member.profilephoto} className='size-44  ml-1 '/>
      
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
      ))}

      </div>


      <div className='text-center mt-4 text-[60px] font-extrabold text-gray-800'>Join us in our <span className='text-lime-500'>adventures</span> </div>
      <p className='text-center mt-4 text-[30px] mx-14 text-gray-600'>We invite you to be a part of the HACKNITY journey. Whether you're launching your dream game, discovering new worlds,
 or simply connecting with fellow enthusiasts, 
you'll find a welcoming home here. Explore our features,
 get started with your first host, or reach out to our team – we're excited to have you!</p>
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
