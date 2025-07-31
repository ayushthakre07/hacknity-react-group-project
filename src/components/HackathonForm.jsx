import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Label from "./Label";
import Button from "./Button";

function HackathonForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form data here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl mx-auto flex flex-col gap-6"
    >
      <div className="flex flex-col">
        <Label htmlFor={"hackathon-title"} labelTitle={"Hackathon Title"} />
        <InputField
          type="text"
          id="hackathon-title"
          name="hackathon-title"
          placeholder="Enter Hackathon Title"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor={"hackathon-description"} labelTitle={"Description"} />
        <TextArea
          name={"hackathon-description"}
          id={"hackathon-description"}
          placeholder={"Add Description..."}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col flex-1">
          <Label htmlFor={"start-date"} labelTitle={"Start Date"} />
          <InputField
            type="date"
            id="start-date"
            name="start-date"
            className="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="flex flex-col flex-1">
          <Label htmlFor={"end-date"} labelTitle={"End Date"} />
          <InputField type="date" id="end-date" name="end-date" />
        </div>
      </div>

      <div className="flex flex-col">
        <Label htmlFor={"organizer-name"} labelTitle={"Organizer's Name"} />
        <InputField
          type="text"
          id="organizer-name"
          name="organizer-name"
          placeholder="Enter Organizer Name"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor={"theme"} labelTitle={"Theme"} />
        <InputField
          type="text"
          id="theme"
          name="theme"
          placeholder="Hackathon Theme"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor={"prizes"} labelTitle={"Prizes"} />
        <InputField
          type="number"
          id="prizes"
          name="prizes"
          placeholder="Total Prize Amount"
        />
      </div>

      <div className="flex flex-col">
        <Label
          htmlFor={"rules-guidelines"}
          labelTitle={"Rules and Guidelines"}
        />
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

export default HackathonForm;
