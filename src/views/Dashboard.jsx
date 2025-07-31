import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import HackathonForm from "./../components/HackathonForm";
import HackthonList from "./../components/HackthonList";
import Heading from "./../components/Heading";

function Dashboard() {
  const [hackathonForm, setHackathonForm] = useState(true);

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 text-gray-900 px-4 py-8 sm:px-6 lg:px-12">
        <Heading
          headingTitle={"Hackathon Hosting Dashboard"}
          customStyle={"mt-3! mb-10!"}
        />

        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
          <Button
            BtnTitle={"Create Hackathon"}
            onclick={() => setHackathonForm(true)}
          />
          <Button
            BtnTitle={"View Hackathons"}
            onclick={() => setHackathonForm(false)}
          />
        </div>

        <div className="flex justify-center">
          {hackathonForm ? <HackathonForm /> : <HackthonList />}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
