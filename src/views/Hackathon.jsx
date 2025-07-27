import React from 'react';
import Button from '../components/Button';

import { MapPin,CalendarDays,Timer } from 'lucide-react';

const cards  = [{name:"IPL",
   location:"Wankhede Stadium",
   city:"Mumbai",
   date:"26/08/2025",
   time: "7:00 PM",
   organizer: "BCCI",
   
   description: "Indian Premier League cricket match at Wankhede Stadium.",},

     {name:"cricket",
       location:"nagpur university",
        city:"nagpur",
         date:"27/08/2025",
          time: "5:00 PM",
    organizer: "Nagpur Sports Club",
    
    description: "Inter-university friendly cricket match.",},

    {name:"kabbadi",
       location:"amravati ", 
       city:"delhi",
        date:"26/08/2025", 
        time: "6:00 PM",
    organizer: "Delhi Kabaddi Association",
    
    description: "Regional kabaddi tournament."},

              {name:"cricket", location:"nagpur university", city:"nagpur", date:"27/08/2025",},
              {name:"kabbadi", location:"amravati ", city:"delhi", date:"26/08/2025"},
              {name:"cricket", location:"nagpur university", city:"nagpur", date:"27/08/2025"},
              {name:"kabbadi", location:"amravati ", city:"delhi", date:"26/08/2025"},
              {name:"cricket", location:"nagpur university", city:"nagpur", date:"27/08/2025"},
                
];

function Hackathon() {
  return (
    <div>
      <h1>Hackathon</h1>
      <div className="flex flex-wrap pl-[200px] gap-y-5 gap-x-[30px] bg-gray-100">
        {cards.map((card) => {
          return(
            <div class="w-full max-w-[500px] bg-aqua rounded-[10px] border border-black text-center">
              <div className='font-bold text-left mx-4.5'>
              <h1 > {card.name}</h1>
              <p className='font-extralight'>Hackathon</p>
              </div>
              <p className='cards-location'> <MapPin />{card.location}</p>
              <p className='cards-info'>{card.city}</p>
             
               <p className='cards-info'> organizer = {card.organizer}</p>
               
                 <p className='cards-info'> {card.description}</p>
                 <div className='flex pl-[90px] gap-y-5 gap-x-[30px]'>
                 <p className=''> <CalendarDays /> start = {card.date}</p>
                 <p className='cards-info'> <Timer /> {card.time}</p>
                 <p><Button BtnTitle="apply now"/> </p>
                 </div>
            </div>
          )
          
})}
    </div>  
    </div>
  );
}

export default Hackathon;
