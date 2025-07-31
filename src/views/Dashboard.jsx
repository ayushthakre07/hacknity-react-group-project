import React, { useState } from "react";
import Button from "./../components/Button";
import InputField from "./../components/InputField";
import TextArea from "./../components/textArea";

function Dashboard() {
  const [hackathonForm, setHackathonForm] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-5">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-lime-600">
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
        {hackathonForm ? <HackathonForm /> : <Hackthon />}
      </div>
    </div>
  );
}

function HackathonForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form data here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl mx-auto flex flex-col gap-6"
    >
      <div className="flex flex-col">
        <label
          htmlFor="hackathon-title"
          className="mb-1 text-gray-700 font-medium"
        >
          Hackathon Title
        </label>
        <InputField
          type="text"
          id="hackathon-title"
          placeholder="Enter Hackathon Title"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="hackathon-description"
          className="mb-1 text-gray-700 font-medium"
        >
          Description
        </label>
        <TextArea
          name={"hackathon-description"}
          id={"hackathon-description"}
          placeholder={"Add Description..."}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col flex-1">
          <label
            htmlFor="start-date"
            className="mb-1 text-gray-700 font-medium"
          >
            Start Date
          </label>
          <InputField
            type="date"
            id="start-date"
            className="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="end-date" className="mb-1 text-gray-700 font-medium">
            End Date
          </label>
          <InputField type="date" id="end-date" />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="organizer-name"
          className="mb-1 text-gray-700 font-medium"
        >
          Organizer's Name
        </label>
        <InputField
          type="text"
          id="organizer-name"
          placeholder="Enter Organizer Name"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="theme" className="mb-1 text-gray-700 font-medium">
          Theme
        </label>
        <InputField type="text" id="theme" placeholder="Hackathon Theme" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="prizes" className="mb-1 text-gray-700 font-medium">
          Prizes
        </label>
        <InputField
          type="number"
          id="prizes"
          placeholder="Total Prize Amount"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="rules-guidelines"
          className="mb-1 text-gray-700 font-medium"
        >
          Rules and Guidelines
        </label>
        <TextArea
          name={"rules-guidelines"}
          id={"rules-guidelines"}
          placeholder={"Add rules and participation guidelines..."}
        />
      </div>

      <Button BtnTitle={"Submit Hackathon"} />
    </form>
  );
}

function Hackthon() {
  return (
    <div className="text-center text-xl font-medium text-gray-800">
      No hackathons available. Try adding one!
    </div>
  );
}

export default Dashboard;
