import React from "react";
import Navbar from "../components/Navbar";
import HomeImg from "../../public/Home-1.jpg";
import JoinUs from "../../public/Join-Us.png";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="relative">
        <img
          src="../../public/schedule.png"
          className="h-20 animate-bounce opacity-65  duration-75 rotate-350 absolute left-60"
        />
        <img
          src="../../public/software.png"
          className="h-20 animate-bounce opacity-65  duration-75 rotate-5 absolute right-50"
        />
        <img
          src="../../public/goal.png"
          className="h-20 animate-bounce opacity-65  duration-75 rotate-350 absolute bottom-0 left-60"
        />
        <img
          src="../../public/collaboration.png"
          className="h-25 animate-bounce opacity-65  duration-75 rotate-5 absolute right-50 bottom-0"
        />
        <img
          src="../../public/ideas.png"
          className="h-20 animate-bounce opacity-55  duration-75 rotate-5 absolute right-20 bottom-60"
        />
        <img
          src="../../public/brainstorm.png"
          className="h-25 animate-bounce opacity-65  duration-75 rotate-350 absolute bottom-60 left-20"
        />
        <img src={HomeImg} className="block mx-auto my-20 w-200 " />
      </div>

      <div>
        <p className="italic text-xl font-bold text-center">JOIN US</p>
        <img src={JoinUs} className="h-[400px]" />
      </div>
    </div>
  );
}
export default Home;
