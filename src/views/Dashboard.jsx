import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import HackathonForm from "./../components/HackathonForm";

function Dashboard() {
  const [hackathonForm, setHackathonForm] = useState(true);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-900 p-5">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-600">
          Hackathon Hosting Dashboard
        </h1>

        <div className="flex flex-wrap gap-5 justify-center my-10">
          <Button
            BtnTitle={"Create Hackathon"}
            onclick={() => {
              setHackathonForm(true);
            }}
          />
          <Button
            BtnTitle={"View Hackathons"}
            onclick={() => {
              setHackathonForm(false);
            }}
          />
        </div>

        <div className="flex justify-center">
          {hackathonForm ? <HackathonForm /> : <HackthonList />}
        </div>
      </div>
    </>
  );
}

function HackthonList() {
  return (
    <div className="text-center text-xl font-medium text-gray-800">
      No hackathons available. Try adding one!
    </div>
  );
}

export default Dashboard;
