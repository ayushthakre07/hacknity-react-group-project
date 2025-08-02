import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { MEMBERS } from '../configs/Aboutconfig';
import Aboutcard from '../components/cards/Aboutcard'
import Heading from '../components/Heading';

function About() {
  return (
    <div>

      <Navbar openPage={"/about"}/>

<main className="container mx-auto p-4 md:px-8 lg:px-12"> 

      <p className='text-4xl md:text-6xl text-center font-bold my-8'>
        Versatile team masters every 
        <span className='text-lime-500 transition-colors'> challenge! </span>
          </p>    
  
    <section className='my-12'>

    <h1 className='text-2xl md:text-3xl my-4 text-center text-gray-400 font-medium '>
      Our mission is to provide an intuitive, robust and community-driven platform 
      <br/>
      for both 
        <span className='text-amber-500 font-extrabold'> online </span> 
        and 
        <span className='text-amber-500 font-extrabold'>offline</span> 
        game hosting.
        </h1>
        <hr className='border-t-2 border-dotted text-lime-500 my-8'/>
        <br/>
        <h2 className='text-3xl font-bold mb-4 text-center md:text-left'> We are committed to </h2>
<ol className='my-4 text-lg font-light space-y-m md:space-y-6'>
<li className="py-2 text-gray-500">
  <span className='text-2xl font-bold text-lime-500'> Empowering Creators:</span>
<br/>  
Offering tools and resources that simplify the hosting process, allowing developers to focus on what they do best-making great games.
</li>
<li className="py-2 text-gray-500 ">
  <span className='text-2xl font-bold text-lime-500'>Enhancing Player Experience:</span> 
  <br/> 
  Ensuring stable, low-latency, and diverse gaming environments for players worldwide.
 </li>
 <li className="py-2  text-gray-500">
<span className='text-2xl font-bold text-lime-500'>
  Fostering Community:
   </span>
    <br/>
    Building a supportive ecosystem where developers can share, learn, and grow, and players can discover new favorites and connect with fellow enthusiasts.
 </li>
</ol>
</section>

<hr className='border-t-2 border-dotted border-lime-500 my-8'/>

<br/>
<section >
  <h1 className='text-3xl md:text-4xl font-extrabold mt-8 mb-2 '>
    What We Offer
  </h1>
  <br/>
  <h2 className='text-lg md:text-xl font-medium text-gray-500'> HACKNITY is designed to cater to a wide spectrum of hosting needs.
   </h2>
  <span className='text-gray-500 md:text-xl mb-8 font-medium block'>
    Here's what makes us the ideal choice for your game hosting :
  </span>
<div className=' bg-gray-100 p-6 rounded-lg'>
  <h1  className='text-2xl font-extrabold text-lime-500 mb-2'>
    For Online Games
    </h1>
 <div className='text-xl text-gray-500 font-light'>
 <p >
  <span  className=' text-black font-semibold '>Robust Server Infrastructure:</span>
  <br/> 
  Our infrastructure is built for scalability, capable of handling sudden 
  spikes in player numbers without a hitch.
  </p>

<p>
  <span className=' text-black font-semibold'>Easy Deployment & Management:</span>
   <br/>
   Our user-friendly dashboard allows for quick game uploads, 
  server configuration, and real-time monitoring. You don't need to be a server expert to get your game online.
  </p>
 </div> 
 </div>
<br/>
<div className='bg-gray-100 p-6 rounded-lg'>
<h1  className='text-2xl font-extrabold mb-2 text-lime-500'>
  For Offline Games
</h1>
<div className='text-xl space-y-4  text-gray-500 font-light'>
<p>
  <span className=' text-black font-semibold '> Secure Content Delivery: 
  <br/>
  </span> Even for offline games, secure and efficient content delivery is crucial. We provide reliable hosting for your game files, 
  ensuring players can download your game quickly and safely.
  </p>
  <p>
  <span className=' text-black font-semibold'> Version Control & Updates:</span> 
  <br/>
  Easily manage different versions of your game and push updates to your player base with our streamlined system.
  </p>
</div>
</div>
</section>  

<section className="my-12">
  <hr className="border-t-2 border-dotted border-lime-500 my-8" />
 <h1 className='text-3xl font-extrabold text-center mb-8'>MEET OUR {''}
    <span className=' text-lime-500   '> HACKNITY </span> 
TEAM
    </h1>
    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center' >

{MEMBERS.map((individualMember,index) => {

  const{profilephoto,noun,role,social}=individualMember;
  return(   
    <div>
      <Aboutcard
      key={index}
      profilephoto={profilephoto}
      noun={noun}
      role={role}
      social={social}/>
      </div>
  );
})}
</div>
</section>
</main>
<Footer/>
</div>);
}
  
      
export default About
