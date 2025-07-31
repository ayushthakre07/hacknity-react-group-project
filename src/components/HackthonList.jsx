import React from "react";
import viewHackathonImg from "./../assets/view-hackathon.png";

function HackthonList() {
  return (
    <div className="text-center text-xl font-medium text-gray-800 w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <img src={viewHackathonImg} alt="Image" className="w-70 mx-auto" />
      No hackathons available. Try adding one!
    </div>
  );
}

export default HackthonList;
