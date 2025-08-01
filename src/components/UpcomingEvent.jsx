import React from "react";

function UpcomingEvent({ SubHeading, Description, Btn }) {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-xl font-semibold mb-2 text-orange-600">
          {SubHeading}
        </h3>
        <p className="text-gray-600 mb-4">{Description}</p>
        {Btn}
      </div>
    </div>
  );
}

export default UpcomingEvent;
