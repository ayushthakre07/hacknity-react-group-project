import React, { useState } from "react";
import Button from "./../components/Button";
import InputField from "../components/InputField";

function Dashboard() {
  const [hackathonForm, setHackathonForm] = useState(true);
  return (
    <>
      <div className="my-10">
        <h1 className="text-center text-4xl md:text-5xl">
          Hackathon Hosting Dashboard
        </h1>
        <div className="flex gap-5 justify-center my-10">
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

const handleSubmit = () => {
  sdfskfjiosjf;
};

function HackathonForm() {
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 items-center"
        >
          <InputField type={"text"} placeholder={"Hackathon Title"} />
          <textarea
            name="hackathon-description"
            id="hackathon-description"
            placeholder="Add Descripption..."
            className="border"
          ></textarea>
          <InputField type={"date"} placeholder={"Hackathon Title"} />
          <InputField type={"date"} />
          <InputField type={"text"} placeholder={"Theme"} />
          <InputField type={"number"} placeholder={"Prizes"} />
          <textarea
            name="rules-guidelines"
            id="rules-guidelines"
            placeholder="Rules and Guidelines"
            className="border"
          ></textarea>
          <Button BtnTitle={"Submit Hackathon"} />
        </form>
      </div>
    </>
  );
}

function Hackthon() {
  return <>Hackthon</>;
}

export default Dashboard;
