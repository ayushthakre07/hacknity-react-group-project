import React from "react";
import { CalendarDays, MapPin, Trophy, User } from "lucide-react";
import Button from "../Button";

export default function HackathonCard({ hackathon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={hackathon.image} alt={hackathon.title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-black">{hackathon.title}</h3>
            <p className="text-gray-700 mt-1">{hackathon.description}</p>
          </div>
          <span className="bg-lime-100 text-lime-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {hackathon.category.charAt(0).toUpperCase() + hackathon.category.slice(1)}
          </span>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" /> {hackathon.date}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {hackathon.location}
          </p>
          <p className="flex items-center gap-2">
            <Trophy className="w-4 h-4" /> {hackathon.prize}
          </p>
          <p className="flex items-center gap-2">
            <User className="w-4 h-4" /> {hackathon.participants}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {hackathon.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-lime-600 font-medium">
            Applications close in <strong className="animate-pulse">{hackathon.deadline}</strong>
          </p>
          <Button BtnTitle="Apply Now" />
        </div>
      </div>
    </div>
  );
}
