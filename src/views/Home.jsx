import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import InputBox from "../components/InputBox";
import { UserIcon, MailIcon } from "lucide-react";
import HomeImg from "../../public/Home-1.jpg";
import JoinUs from "../../public/Join-Us.png";
import RightArrow from "../../public/right-arrow.png";
import Pic1 from "../../public/pic-1.png";

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
          src="/schedule.png"
          className="h-20 animate-bounce opacity-65 duration-75 rotate-350 absolute left-60"
        />
        <img
          src="/software.png"
          className="h-20 animate-bounce opacity-65 duration-75 rotate-5 absolute right-50"
        />
        <img
          src="/goal.png"
          className="h-20 animate-bounce opacity-65 duration-75 rotate-350 absolute bottom-5 left-60"
        />
        <img
          src="/collaboration.png"
          className="h-25 animate-bounce opacity-65 duration-75 rotate-5 absolute right-50 bottom-0"
        />
        <img
          src="/ideas.png"
          className="h-20 animate-bounce opacity-55 duration-75 rotate-5 absolute right-20 bottom-60"
        />
        <img
          src="/brainstorm.png"
          className="h-25 animate-bounce opacity-65 duration-75 rotate-350 absolute bottom-60 left-20"
        />
        <img src={HomeImg} className="block mx-auto my-20 w-200" />
      </div>
      <hr />
      <hr />
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
              <UserIcon className="size-9" />
            </div>

            <div className="flex items-center">
              <InputBox
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MailIcon className="size-9" />
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
      <hr />
      <hr />

      <div>
        <img src={Pic1} className="my-15 h-120 block mx-auto" />
      </div>
      <hr />
      <hr />
    </div>
  );
}

export default Home;
