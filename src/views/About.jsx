import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { MEMBERS } from '../configs/Aboutconfig';

function About() {
  return (
    <div>
      <Navbar openPage={"/about"}/>
<main className="container mx-auto p-4"> 
      <p className='text-4xl md:text-6xl text-center font-bold'>Versatile team masters every <span className='text-lime-500 transition-colors'>challenge!</span></p>    
   <p>
    <section className='my-12'>
    <h1 className='text-4xl my-4 text-center text-gray-400'>Our mission is to provide an intuitive, robust and community-driven platform <br/>for both 
        <span className='text-amber-500 font-extrabold'>   online </span> 
        and <span className='text-amber-500 font-extrabold'>offline</span> game hosting.</h1>
        <hr className='border-dotted text-lime-500'/>
        <br/>
        <h2 className='text-4xl font-bold ml-6'> We are committed to </h2>
<ol className='ml-6 my-2 text-[20px] font-light'>
<li className="py-2 text-gray-500"><span className='text-2xl font-bold text-lime-500'> Empowering Creators:</span><br/>  Offering tools and resources that simplify the hosting process, allowing developers to focus on what they do best - making great games.
</li>
<li className="py-2 text-gray-500 "><span className='text-2xl font-bold text-lime-500'>Enhancing Player Experience:</span> <br/> Ensuring stable, low-latency, and diverse gaming environments for players worldwide.
 </li>
 <li className="py-2  text-gray-500">
<span className='text-2xl font-bold text-lime-500'>Fostering Community: </span> <br/>Building a supportive ecosystem where developers can share, learn, and grow, and players can discover new favorites and connect with fellow enthusiasts.
 </li>
</ol>
</section>
</p>
<hr className='border-dotted  text-lime-500'/>
<br/>
<section >
  <h1 className='text-2xl md:text-4xl font-extrabold ml-8 '>What We Offer</h1>
  <br/>
  <h2 className=' ml-8  md:text-3xl font-bold text-gray-600'> HACKNITY is designed to cater to a wide spectrum of hosting needs. </h2>
  <br/>
  <span className='text-xl text-gray-500  md:text-4xl ml-8 font-medium'>Here's what makes us the ideal choice for your game hosting :</span>
    
 <br/>

  <h1  className='text-2xl font-extrabold ml-8 text-lime-500 mt-3'>For Online Games</h1>
 <div className='text-xl ml-8 text-gray-500 font-light'>
 <p ><span  className=' text-black '>Robust Server Infrastructure:</span><br/> Our infrastructure is built for scalability, capable of handling sudden 
  spikes in player numbers without a hitch.</p>

<p><span className=' text-black '>Easy Deployment & Management:</span> <br/>Our user-friendly dashboard allows for quick game uploads, 
  server configuration, and real-time monitoring. You don't need to be a server expert to get your game online.</p>

 </div> 
<br/>
<h1  className='text-2xl font-extrabold ml-9 text-lime-500'>
  For Offline Games
</h1>
<div className='text-xl ml-8  text-gray-500 font-light'>
<p><span className=' text-black '> Secure Content Delivery: </span> Even for offline games, secure and efficient content delivery is crucial. We provide reliable hosting for your game files, ensuring players can download your game quickly and safely.</p>
<p><span className=' text-black '> Version Control & Updates:</span> Easily manage different versions of your game and push updates to your player base with our streamlined system.</p>
</div>
<br/>
<hr className='border-dotted  text-lime-500'/>
<br/>
</section>  

 <h1 className='text-4xl font-extrabold text-center mb-8'>Meet Our Team</h1>

    <div className=' object-center mx-30 flex flex-wrap' >

{MEMBERS.map((individualMember) => {

  const{noun,role, profilephoto,social}=individualMember;
  return(
          <div
            className='px-30 py-6 rounded-2xl flex flex-col items-center text-center'
            key={individualMember.name} // Using noun as key,as each noun is diff.//
          >
            <img
              src={individualMember.profilephoto}
              className='size-44 mb-4' 
              alt={`${individualMember.noun}'s profile`}
            />
            <p className='py-2 px-6 bg-amber-400 rounded-lg text-lg font-semibold mb-2'>{individualMember.noun}</p>
            <p className='text-gray-700 text-sm'>{individualMember.role}</p>
            <div className='flex mt-4 gap-4'> 

              {individualMember.social.map((socialLink, socialIndex) => (
                <a
                  href={socialLink.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={socialLink.url} 
                  aria-label={`Visit ${individualMember.noun}'s ${socialLink.noun|| 'social'} profile`}
                >
                  <img
                    src={socialLink.icon}
                    className='size-8 bg-gray-200 p-1 rounded-xl transition-transform duration-200 hover:scale-120 hover:bg-gray-300'
                    alt={`${socialLink.noun} icon`}
                  />
                </a>
              ))}
      </div>   
      </div>
  )
})}
</div>
</main>
<Footer/>
</div>)}
  
      
export default About
