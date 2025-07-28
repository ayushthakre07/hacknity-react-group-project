import React from "react";
import Navbar from "../components/Navbar";
import HomeImg from "../../public/Home-1.jpg";

function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <img src={HomeImg} className="block mx-auto my-20 w-200 " />
      </div>

      <div>
        <p>JOIN US</p>
      </div>
    </div>
  );
}
export default Home;
