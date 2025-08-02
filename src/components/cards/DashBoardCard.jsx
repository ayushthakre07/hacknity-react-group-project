import React from "react";
import {
  CalendarDays,
  Clock,
  Trophy,
  Loader,
  Notebook,
  Siren,
} from "lucide-react";
import DashCardData from "./../DashCardData";

function DashBoardCard({
  name,
  startDate,
  endDate,
  time,
  organizer,
  description,
  rules,
  prizes,
}) {
  return (
    <div className="flex flex-col items-start text-start text-gray-800 max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-3xl font-bold text-amber-600 border-b-4 border-lime-500 pb-2 mb-7 w-full">
        {name}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-2">
        <div className="space-y-3 ">
          <DashCardData
            Icon={CalendarDays}
            dataTitle={"Start Date:"}
            data={startDate}
          />

          <DashCardData
            Icon={CalendarDays}
            dataTitle={"End Date:"}
            data={endDate}
          />

          <DashCardData Icon={Clock} dataTitle={"Time:"} data={time} />

          <DashCardData
            Icon={Trophy}
            dataTitle={"Prizes:"}
            data={`₹ ${prizes}`}
          />
        </div>

        <div className="space-y-3">
          <DashCardData
            Icon={Loader}
            dataTitle={"Organizer:"}
            data={organizer}
          />

          <DashCardData
            Icon={Notebook}
            dataTitle={"Description:"}
            data={description}
            customTextStyle={"flex-col"}
          />

          <DashCardData
            Icon={Siren}
            dataTitle={"Rules:"}
            data={rules}
            customTextStyle={"flex-col"}
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoardCard;
