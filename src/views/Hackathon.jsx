import React from 'react';
import { MapPin } from 'lucide-react';

const cards  = [{name:"IPL", location:"Wankhede Stadium", city:"Mumbai", date:"26/08/2025",time: "7:00 PM",
    organizer: "BCCI",
    isFree: false,
    description: "Indian Premier League cricket match at Wankhede Stadium.",},

              {name:"cricket", location:"nagpur university", city:"nagpur", date:"27/08/2025", time: "5:00 PM",
    organizer: "Nagpur Sports Club",
    isFree: true,
    description: "Inter-university friendly cricket match.",},

              {name:"kabbadi", location:"amravati ", city:"delhi", date:"26/08/2025", time: "6:00 PM",
    organizer: "Delhi Kabaddi Association",
    isFree: true,
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
      <div className="flex flex-wrap pl-[200px] gap-y-5 gap-x-[30px]">
        {cards.map((card) => {
          return(
            <div class="w-full max-w-[500px] bg-aqua rounded-[10px] border border-black text-center">
              <h1 className='cards-name'> {card.name}</h1>
              <p className='cards-location'> <MapPin />{card.location}</p>
              <p className='cards-info'>{card.city}</p>
              <p className='cards-info'> {card.date}</p>
               <p className='cards-info'> {card.organizer}</p>
                <p className='cards-info'> {card.isFree}</p>
                 <p className='cards-info'> {card.description}</p>
            </div>
          )
          
})}
    </div>  
    </div>
  );
}

export default Hackathon;
