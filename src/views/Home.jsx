import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import Navbar from "../components/Navbar";
import InputBox from "../components/InputBox";
import HomeImg from "../../src/assets/Home-1.jpg";
import JoinUs from "../../src/assets/Join-us.png";
import RightArrow from "../../src/assets/right-arrow.png";
import Pic1 from "../../src/assets/pic-1.png";
import EmailImg from "../../src/assets/email.png";
import ProfileImg from "../../src/assets/profile.png";
import Pic2 from "../../src/assets/pic-2.jpg";
import Pic6 from "../../src/assets/pic-6.png";
import ShowCase from "../components/ShowCase";
import Pic3 from "../../src/assets/pic-3.png";
import Pic7 from "../../src/assets/pic-7.png";
import Pic4 from "../../src/assets/pic-4.webp";
import Pic8 from "../../src/assets/pic-8.png";
import Pic5 from "../../src/assets/pic-5.jpg";
import Pic9 from "../../src/assets/pic-9.png";
import Brainstorm from "../../src/assets/brainstorm.png";
import Collaboration from "../../src/assets/collaboration.png";
import Goal from "../../src/assets/goal.png";
import Ideas from "../../src/assets/ideas.png";
import Schedule from "../../src/assets/schedule.png";
import Software from "../../src/assets/software.png";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleJoinClick = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill out both Name and Email.");
      return;
    }
    navigate("/Login.jsx");
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          src={Schedule}
          className="h-20 animate-bounce opacity-65 duration-75 rotate-350 absolute left-60"
        />
        <img
          src={Software}
          className="h-20 animate-bounce opacity-65 duration-75 rotate-5 absolute right-50"
        />
        <img
          src={Goal}
          className="h-20 animate-bounce opacity-65 duration-75 rotate-350 absolute bottom-5 left-60"
        />
        <img
          src={Collaboration}
          className="h-25 animate-bounce opacity-65 duration-75 rotate-5 absolute right-50 bottom-0"
        />
        <img
          src={Ideas}
          className="h-20 animate-bounce opacity-55 duration-75 rotate-5 absolute right-20 bottom-60"
        />
        <img
          src={Brainstorm}
          className="h-25 animate-bounce opacity-65 duration-75 rotate-350 absolute bottom-60 left-20"
        />
        <img src={HomeImg} className="block mx-auto my-20 w-200" />
      </div>
    
      <div>
        <p className="italic text-2xl font-bold text-center font-serif py-3 px-4 mb-15 my-5">
          JOIN US
        </p>
        <div className="flex justify-center gap-15">
          <img src={JoinUs} className="h-70" alt="Join Us" />

          <div className="flex flex-col items-center py-5">
            <div className="flex items-center">
              <InputBox
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <img src={ProfileImg} className="size-9" />
            </div>

            <div className="flex items-center">
              <InputBox
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <img src={EmailImg} className="size-9" />
            </div>

            <img
              src={RightArrow}
              className="h-10 my-5 cursor-pointer"
              onClick={handleJoinClick}
              alt="Submit"
            />
          </div>
        </div>
      </div>
     

      <div>
        <img src={Pic1} className="my-15 h-120 block mx-auto" />
      </div>
      

      <div className="flex justify-center gap-60">
        <ShowCase
          number="1"
          color1="bg-gray-800"
          color2="bg-green-400"
          color3="bg-blue-400"
          color4="bg-gray-200 "
          color5=" text-green-600"
          heading={"Your digital up-to-\ndate resume"}
          description={
            "Showcase your skills, work experience, projects,\nand social profiles — all in one place with your\ndigital, always up-to-date resume.\nLet the world see what you’ve built and where\nyou’ve been."
          }
          buttonText="Create Your Resume"
          link="/Login"
        />
        <img src={Pic2} className="h-110 my-20 animate-pulse" />
      </div>

    

      <img src={Pic6} className="h-115 block mx-auto my-10 shadow-xl/20" />
      

      <div className="flex justify-center gap-60 mb-15">
        <img src={Pic3} className="h-100 mt-20  animate-pulse" />
        <ShowCase
          number="2"
          color1="bg-black"
          color2="bg-orange-300"
          color3="bg-green-400"
          color4="bg-gray-300"
          color5="text-orange-600"
          heading={"A showcase of all \n your projects"}
          description={
            "Share your weekend hacks, passion projects,\n or big ideas — invite collaborators and inspire\n the next wave of builders."
          }
          buttonText="Add Your Project"
          link="/Login"
        />
      </div>
      

      <img src={Pic7} className="h-115 block mx-auto my-10 shadow-xl/20" />
      

      <div className="flex justify-center gap-60 mb-20">
        <ShowCase
          number="3"
          color1="bg-black"
          color2="bg-orange-200"
          color3="bg-pink-300"
          color4="bg-gray-300"
          color5="text-pink-600"
          heading={"Your portal to the\n best hackathons"}
          description={
            "One-click hackathon applications —\n we save your info so you don’t have to fill it \nout every time.."
          }
          buttonText="Browse  Hackathon"
          link="/Hackathon"
        />
        <img src={Pic4} className="h-80 mt-30 animate-pulse" />
      </div>

   

      <img src={Pic8} className="h-115 block mx-auto my-10 shadow-xl/20" />
      

      <div className="flex justify-center  gap-60 mb-20">
        <img src={Pic5} className="h-80 mt-30 animate-pulse" />
        <ShowCase
          number="4"
          color1="bg-black"
          color2="bg-yellow-300"
          color3="bg-blue-500"
          color4="bg-gray-300"
          color5="text-yellow-700"
          heading={"Your skill assessment\n playground"}
          description={
            "Take our quiz, earn a badge and see where\n you stand among the rest of the builders."
          }
          buttonText="Take the Quiz"
          link="/Login"
        />
      </div>
      
      <img src={Pic9} className="h-115 block mx-auto my-10 shadow-xl/20"/>

    </div>
  );
}

export default Home;
