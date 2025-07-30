import React, { useState } from "react";
import Button from "./../components/Button";

function HackathonForm() {
  return <>snksfkfkandknKdnkjadkjakak</>;
}

function Hackthon() {
  return <>Hackthon</>;
}

function Dashboard() {
  const [hackathonForm, setHackathonForm] = useState(true);
  return (
    <>
      <div className="my-10">
        <h1 className="text-center text-4xl md:text-5xl">
          Hackathon Hosting Dashboard
        </h1>
        <div className="flex gap-5 justify-center mt-10">
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
        <div> {hackathonForm ? <HackathonForm /> : <Hackthon />}</div>
      </div>
    </>
  );
}

export default Dashboard;
