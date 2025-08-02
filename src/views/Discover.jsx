import React, { useState } from "react";
import { Flame, Search, TrendingUp, Heart } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import hackathons from "../configs/HackathonsConfig";
import HackathonCard from "../components/cards/HackathonCard";
import trendingProjects from "../configs/TrendingProjectsConfig";
import categories from "../configs/CategoriesConfig";

export default function DiscoverPage() {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar openPage={"/discover"} />
      <div className="bg-gray-50 min-h-screen px-4 md:px-20 py-10 space-y-12">
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Discover & Join Amazing{" "}
            <span className="text-lime-500">Hackathons</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Find competitions, build projects, win prizes, and grow your skills
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search hackathons by name, tech, or prize..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        <section className="overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-lime-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black flex items-center gap-2">
              <Flame className="text-orange-500" />{" "}
              {activeCategory === "featured"
                ? "Featured"
                : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <a href="/hackathon">
              <button className="text-lime-500 hover:text-lime-600 font-medium cursor-pointer">
                View all
              </button>
            </a>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons
              .filter(
                (h) =>
                  (!activeCategory || h.category === activeCategory) &&
                  h.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((hackathon) => (
                <HackathonCard key={hackathon.id} hackathon={hackathon} />
              ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black flex items-center gap-2">
              <TrendingUp className="text-green-500" /> Trending Projects
            </h2>
            <button className="text-lime-500 hover:text-lime-600 font-medium">
              View all
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {trendingProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-black">{project.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <span className="flex items-center text-xs text-gray-500">
                    <Heart className="w-4 h-4 mr-1" /> {project.likes}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium">
                    {project.team.charAt(0)}
                  </div>
                  <span className="ml-2 text-sm text-gray-800">
                    {project.team}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-lime-50 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-700 mb-6">
              Connect with 500,000+ developers, designers, and makers building
              the future through hackathons and collaborative projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-medium">
                Join Discord
              </button>
              <button className="bg-white hover:bg-gray-100 text-lime-600 px-6 py-3 rounded-lg font-medium border border-lime-300">
                Follow on Twitter
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
