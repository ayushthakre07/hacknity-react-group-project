import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Maps from "./../../public/map.png";

import {CalendarDays,Timer } from 'lucide-react';

const cards  = [{name:"IPL",
   location:"Wankhede Stadium",
   city:"Mumbai",
   date:"26/08/2025",
   time: "7:00 PM",
   organizer: "BCCI",
   
   description: "Indian Premier League cricket match at Wankhede Stadium in mumbai.",},

     {
    name: "CodeSprint 2025",
    location: "IIT Bombay",
    city: "Mumbai",
    date: "10/09/2025",
    time: "9:00 AM",
    organizer: "HackerRank",
    description: "A competitive programming hackathon for top coders across the country."
  },
  {
    name: "HackMania",
    location: "Tech Park Auditorium",
    city: "Bengaluru",
    date: "15/10/2025",
    time: "10:00 AM",
    organizer: "TechGeeks",
    description: "48-hour hackathon to build real-world software solutions in bangaluru."
  },
  {
    name: "DevJam 2025",
    location: "T-Hub",
    city: "Hyderabad",
    date: "20/11/2025",
    time: "11:00 AM",
    organizer: "DevNet",
    description: "A software development jam focusing on AI and cloud technologies in hyderabad."
  },
  {
    name: "AIthon",
    location: "IIT Delhi",
    city: "New Delhi",
    date: "05/12/2025",
    time: "9:30 AM",
    organizer: "Google Developers Group",
    description: "AI and ML focused hackathon with mentorship from industry leaders."
  },

   {
    name: "BlockHack 2025",
    location: "NASSCOM Center",
    city: "Pune",
    date: "05/11/2025",
    time: "10:00 AM",
    organizer: "ChainLabs",
    description: "Blockchain-focused hackathon with use-cases in supply chain and finance."
  },
  {
    name: "CodeCraft",
    location: "SRM University",
    city: "Chennai",
    date: "12/09/2025",
    time: "8:00 AM",
    organizer: "SRM Tech Club",
    description: "Student-run hackathon encouraging innovation and entrepreneurship."
  },

  
  {
    name: "HackHub",
    location: "Amity University",
    city: "Noida",
    date: "18/08/2025",
    time: "10:00 AM",
    organizer: "Amity Coders",
    description: "A national-level hackathon with themes like fintech and sustainability."
  },
  {
    name: "CyberHack",
    location: "Cyber City Convention Center",
    city: "Gurgaon",
    date: "22/10/2025",
    time: "11:00 AM",
    organizer: "Infosec League",
    description: "Security-focused hackathon addressing real-world cybersecurity challenges."
  },
  {
    name: "GreenHack",
    location: "BITS Pilani",
    city: "Pilani",
    date: "30/09/2025",
    time: "9:00 AM",
    organizer: "EcoTech Club",
    description: "Hackathon for building eco-friendly, sustainable tech solutions."
  },
  {
    name: "GameJam X",
    location: "Christ University",
    city: "Bangalore",
    date: "17/10/2025",
    time: "9:00 AM",
    organizer: "IndieDevs",
    description: "Game development hackathon focused on storytelling and mechanics."
  },
 
];

function Hackathon() {
  const upcomingEvents = cards.slice(0, 6);
  const pastEvents = cards.slice(6, 10);

  const renderCards = (cards) => (
    <div className="flex flex-wrap pl-[200px] gap-y-5 gap-x-[30px] bg-gray-100">
      {cards.map((card) => (
        <div
          
          className="h-[300px] max-w-[500px] rounded-[20px] border-2 border-[#D1EE6B] text-center bg-white shadow-sm 
                   transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-[#a2e317]"
        >
          <div className="font-bold text-left mx-4.5">
           
            <h1 className="text-[#485129] text-2xl"> {card.name}</h1>
            <p className="font-extralight">Hackathon</p>
          </div>
          <img className='mx-60 h-[25px] w-[30px]' src={Maps}/>{card.location}
          <p className="cards-info">{card.city}</p>
          <p className="cards-info">Organizer = {card.organizer}</p>
          <p className="text-[#28e317]">{card.description}</p>
          <div className="flex pl-[90px] gap-y-5 gap-x-[30px] pt-5 bg-amber-200">
            <p ><CalendarDays /> Start = {card.date}</p>
            <p className="cards-info"><Timer /> {card.time}</p>
            <p><Button BtnTitle="Apply Now"  /></p>
          
        </div>
         </div>
      ))}
    </div>
     
  );

  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#485129]">Upcoming Hackathon Events</h1>
        {renderCards(upcomingEvents)}
      </div>

      <div className="bg-gray-100 p-8 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#485129]">Past Hackathon Events</h1>
        {renderCards(pastEvents)}
      </div>
    </div>
  );
}


export default Hackathon;
