import React from "react";
import Navbar from "../components/Navbar.jsx";
import { useState } from "react";
import { Link } from "react-router";
import Heading from "../components/Heading.jsx";
import Button from "../components/Button.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative flex items-center justify-center p-8 mt-50 ">
        <div className="relative text-center w-4xl">
          <Heading headingTitle="Welcome to our platform" />
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Join us and unlock your potential and participate in exciting
            hackathon events.
          </p>
          <Link to="/Login">
            <Button BtnTitle="Get Started" onclick="./Login" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
