import React from "react";
import {
  CalendarDays,
  Clock,
  Trophy,
  Loader,
  Notebook,
  Siren,
} from "lucide-react";

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
    <div className="flex flex-col items-start justify-center text-start text-gray-800 max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-5 text-amber-500 border-b-3 border-lime-500">
        {name}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <span className="flex gap-2 font-semibold min-w-[120px] text-gray-800">
              <span className="text-amber-400">
                <CalendarDays />
              </span>{" "}
              Start Date:
            </span>
            <span className="text-gray-600">{startDate}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="flex gap-2 font-semibold min-w-[120px] text-gray-800">
              <span className="text-amber-400">
                {" "}
                <CalendarDays />
              </span>
              End Date:
            </span>
            <span className="text-gray-600">{endDate}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="flex gap-2 font-semibold min-w-[120px] text-gray-800">
              <span className="text-amber-400">
                <Clock />
              </span>
              Time:
            </span>
            <span className="text-gray-600">{time}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="flex gap-2 font-semibold min-w-[120px] text-gray-800">
              <span className="text-amber-400">
                <Trophy />
              </span>{" "}
              Prizes:
            </span>
            <span className="text-gray-600">{prizes}</span>
          </p>
        </div>
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <span className="flex gap-2 font-semibold min-w-[120px] text-gray-800">
              <span className="text-amber-400">
                {" "}
                <Loader />
              </span>{" "}
              Organizer:
            </span>
            <span className="text-gray-600">{organizer}</span>
          </p>
          <p className="flex flex-col gap-1">
            <span className="flex gap-2 font-semibold text-gray-800">
              <span className="text-amber-400">
                {" "}
                <Notebook />{" "}
              </span>
              Description:
            </span>
            <span className="text-gray-600 text-sm">{description}</span>
          </p>
          <p className="flex flex-col gap-1">
            <span className="flex gap-2 font-semibold text-gray-800">
              <span className="text-amber-400">
                {" "}
                <Siren />
              </span>
              Rules:
            </span>
            <span className="text-gray-600 text-sm">{rules}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashBoardCard;
