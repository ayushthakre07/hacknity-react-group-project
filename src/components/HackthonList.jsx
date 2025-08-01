import React from "react";
import viewHackathonImg from "./../assets/view-hackathon.png";
import DashBoardCard from "./../components/cards/DashBoardCard";

function HackthonList() {
  const hacksInDashboard =
    JSON.parse(localStorage.getItem("hackathonData")) || [];
  return (
    <>
      {hacksInDashboard.length > 0 ? (
        hacksInDashboard.map((hackathon, index) => {
          const {
            name,
            description,
            startDate,
            endDate,
            time,
            organizer,
            prizes,
            rules,
          } = hackathon;
          return (
            <DashBoardCard
              key={index}
              name={name}
              startDate={startDate}
              endDate={endDate}
              time={time}
              prizes={prizes}
              organizer={organizer}
              description={description}
              rules={rules}
            />
          );
        })
      ) : (
        <div className="text-center text-xl font-medium text-gray-800 w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <img src={viewHackathonImg} alt="Image" className="w-70 mx-auto" />
          No hackathons available. Try adding one!
        </div>
      )}
    </>
  );
}

export default HackthonList;
