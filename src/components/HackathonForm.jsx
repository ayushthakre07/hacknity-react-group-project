import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Label from "./Label";
import Button from "./Button";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

function HackathonForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errorName ||
      errorDescription ||
      errorTime ||
      errorOrganizer ||
      errorRules
    ) {
      toast.error("Fix the error first.");
      return;
    }

    if (
      hackathonData.name === "" ||
      hackathonData.description === "" ||
      hackathonData.startDate === "" ||
      hackathonData.endDate === "" ||
      hackathonData.time === "" ||
      hackathonData.organizer === "" ||
      hackathonData.rules === ""
    ) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    toast.success("Your data has been saved.");
  };

  const [hackathonData, setHackathonData] = useState({
    name: "",
    location: "",
    city: "",
    startDate: "",
    endDate: "",
    time: "",
    organizer: "",
    description: "",
    rules: "",
  });

  const [errorName, setErrorName] = useState();
  const [errorDescription, setErrorDescription] = useState();
  const [errorTime, setErrorTime] = useState();
  const [errorOrganizer, setErrorOrganizer] = useState();
  const [errorRules, setErrorRules] = useState();

  useEffect(() => {
    if (hackathonData.name === "") {
      setErrorName("");
    } else if (hackathonData.name.length < 3) {
      setErrorName("Name cannot have less than 3 characters");
    } else if (hackathonData.name.length > 30) {
      setErrorName("Name cannot have more than 30 charaacters");
    } else {
      setErrorName("");
    }

    if (hackathonData.description.length === 0) {
      setErrorDescription("");
    } else if (hackathonData.description.length < 50) {
      setErrorDescription("Description cannot have less than 50 characters");
    } else if (hackathonData.description.length > 1000) {
      setErrorDescription("Description cannot more than 1000 characters");
    } else {
      setErrorDescription("");
    }

    if (!hackathonData.time) {
      setErrorTime("Time is required");
    } else {
      setErrorTime("");
    }

    if (hackathonData.organizer === "") {
      setErrorOrganizer("");
    } else if (hackathonData.organizer.length < 3) {
      setErrorOrganizer("Name cannot have less than 3 characters");
    } else if (hackathonData.organizer.length > 30) {
      setErrorOrganizer("Name cannot have more than 30 characters");
    } else {
      setErrorOrganizer("");
    }

    if (hackathonData.rules.length === 0) {
      setErrorRules("");
    } else if (hackathonData.rules.length < 50) {
      setErrorRules("Ruels & Regulations cannot have less than 50 characters");
    } else if (hackathonData.rules.length > 1000) {
      setErrorRules("Ruels & Regulations cannot more than 1000 characters");
    } else {
      setErrorRules("");
    }
  }, [
    hackathonData.name,
    hackathonData.description,
    hackathonData.startDate,
    hackathonData.endDate,
    hackathonData.time,
    hackathonData.organizer,
    hackathonData.rules,
  ]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl mx-auto flex flex-col gap-6"
    >
      <div className="flex flex-col">
        <Label
          htmlFor={"hackathon-title"}
          labelTitle={"Hackathon Title"}
          important={true}
        />
        <InputField
          type="text"
          id="hackathon-title"
          name="hackathon-title"
          placeholder="Enter Hackathon Title"
          value={hackathonData.name}
          onchange={(e) =>
            setHackathonData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <span className="text-red-400">{errorName}</span>
      </div>
      <div className="flex flex-col">
        <Label
          htmlFor={"hackathon-description"}
          labelTitle={"Description"}
          important={true}
        />
        <TextArea
          name="hackathon-description"
          id="hackathon-description"
          placeholder="Add Description..."
          value={hackathonData.description}
          onchange={(e) =>
            setHackathonData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
        <span className="text-red-400">{errorDescription}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col flex-1">
          <Label
            htmlFor={"start-date"}
            labelTitle={"Start Date"}
            important={true}
          />
          <InputField
            type="date"
            id="start-date"
            name="start-date"
            min={new Date().toISOString().split("T")[0]}
            value={hackathonData.startDate}
            onchange={(e) =>
              setHackathonData((prev) => ({
                ...prev,
                startDate: e.target.value,
              }))
            }
          />
        </div>

        <div className="flex flex-col flex-1">
          <Label
            htmlFor={"end-date"}
            labelTitle={"End Date"}
            important={true}
          />
          <InputField
            type="date"
            id="end-date"
            name="end-date"
            min={new Date().toISOString().split("T")[0]}
            value={hackathonData.endDate}
            onchange={(e) =>
              setHackathonData((prev) => ({
                ...prev,
                endDate: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Label htmlFor={"time"} labelTitle={"Time"} important={true} />
        <InputField
          type="time"
          id="time"
          name="time"
          value={hackathonData.time}
          onchange={(e) =>
            setHackathonData((prev) => ({ ...prev, time: e.target.value }))
          }
        />
        <span className="text-red-400">{errorTime}</span>
      </div>
      <div className="flex flex-col">
        <Label htmlFor={"location"} labelTitle={"Location"} important={true} />
        <InputField
          type="text"
          id="location"
          name="location"
          placeholder="Enter Venue Location"
          value={hackathonData.location}
          onchange={(e) =>
            setHackathonData((prev) => ({ ...prev, location: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col">
        <Label htmlFor={"city"} labelTitle={"City"} />
        <InputField
          type="text"
          id="city"
          name="city"
          placeholder="Enter City"
          value={hackathonData.city}
          onchange={(e) =>
            setHackathonData((prev) => ({ ...prev, city: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col">
        <Label
          htmlFor={"organizer-name"}
          labelTitle={"Organizer's Name"}
          important={true}
        />
        <InputField
          type="text"
          id="organizer-name"
          name="organizer-name"
          placeholder="Enter Organizer Name"
          value={hackathonData.organizer}
          onchange={(e) =>
            setHackathonData((prev) => ({ ...prev, organizer: e.target.value }))
          }
        />
        <span className="text-red-400">{errorOrganizer}</span>
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
          important={true}
        />
        <TextArea
          name="rules-guidelines"
          id="rules-guidelines"
          placeholder="Add rules and participation guidelines..."
          value={hackathonData.rules}
          onchange={(e) =>
            setHackathonData((prev) => ({
              ...prev,
              rules: e.target.value,
            }))
          }
        />
        <span className="text-red-400">{errorRules}</span>
      </div>
      <Button BtnTitle={"Submit Hackathon"} type={"submit"} />
      <Toaster />
    </form>
  );
}

export default HackathonForm;
