import React, { useState } from "react";
import { 
  Flame, 
  CalendarDays, 
  Clock, 
  MapPin, 
  User, 
  Search, 
  Trophy, 
  TrendingUp,
  Zap,
  Star,
  Code2,
  Globe,
  Heart,
} from "lucide-react";
import Hackathon from "./Hackathon";

export default function DiscoverPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Hackathons", icon: <Code2 size={18} /> },
    { id: "featured", name: "Featured", icon: <Star size={18} /> },
    { id: "beginner", name: "Beginner Friendly", icon: <User size={18} /> },
    { id: "prizes", name: "Big Prizes", icon: <Trophy size={18} /> },
    { id: "trending", name: "Trending", icon: <TrendingUp size={18} /> },
    { id: "online", name: "Online", icon: <Globe size={18} /> },
    { id: "soon", name: "Starting Soon", icon: <Zap size={18} /> }
  ];

  const featuredHackathons = [
    {
      id: 1,
      title: "Onchain Summer Awards",
      description: "Build. Launch. Scale. Earn. This summer's top web3 hackathon!",
      date: "Jul 9 – Aug 26, 2025",
      location: "Online",
      prize: "$250K+ in prizes",
      participants: "1,200+ registered",
      image: "https://assets.devfolio.co/hackathons/onchain-summer/cover.png",
      deadline: "28d:11h:28m",
      tags: ["web3", "blockchain", "ethereum"]
    },
    {
      id: 2,
      title: "AI Innovation Challenge",
      description: "Build the next generation of AI applications",
      date: "Aug 15 – Sep 15, 2025",
      location: "Online & SF Finals",
      prize: "$100K in prizes",
      participants: "800+ registered",
      image: "https://assets.devfolio.co/hackathons/f8/cover.png",
      deadline: "42d:05h:12m",
      tags: ["ai", "ml", "generative"]
    }
  ];

  const trendingProjects = [
    {
      id: 1,
      title: "ChillQuest",
      description: "Interactive chill game project with NFT rewards",
      likes: 311,
      tags: ["gaming", "web3", "unity"],
      team: "Pixel Pioneers"
    },
    {
      id: 2,
      title: "Matrix",
      description: "Learn new programming languages through interactive challenges",
      likes: 135,
      tags: ["education", "web"],
      team: "Code Alchemists"
    },
    {
      id: 3,
      title: "EcoTrack",
      description: "Carbon footprint tracker with blockchain verification",
      likes: 278,
      tags: ["sustainability", "blockchain"],
      team: "Green Hackers"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-20 py-10 space-y-12">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Discover & Join Amazing <span className="text-indigo-600">Hackathons</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find competitions, build projects, win prizes, and grow your skills
        </p>
        
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search hackathons by name, tech, or prize..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Flame className="text-orange-500" /> Featured Hackathons
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium">
            View all
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{hackathon.title}</h3>
                    <p className="text-gray-600 mt-1">{hackathon.description}</p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Featured
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
                    <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-indigo-600 font-medium">
                    Applications close in <strong>{hackathon.deadline}</strong>
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <TrendingUp className="text-green-500" /> Trending Projects
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium">
            View all
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {trendingProjects.map((project) => (
            <div key={project.id} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>
                <span className="flex items-center text-xs text-gray-500">
                  <Heart className="w-4 h-4 mr-1" /> {project.likes}
                </span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium">
                  {project.team.charAt(0)}
                </div>
                <span className="ml-2 text-sm text-gray-700">{project.team}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <CalendarDays className="text-blue-500" /> Upcoming Events
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium">
            View all
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4">
                <CalendarDays className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">10 Years of Ethereum Meetups</h3>
                <p className="text-gray-600 mb-3">Celebrate and plan what's next for Ethereum</p>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4" /> Bangalore, India
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4" /> 4 – 9PM, Jun 30, 2025
                  </p>
                </div>
                <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                  Learn more →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="bg-purple-100 text-purple-800 p-3 rounded-lg mr-4">
                <CalendarDays className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">KubeCon + CloudNativeCon</h3>
                <p className="text-gray-600 mb-3">Top open source and cloud devs unite</p>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4" /> Hyderabad, India
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <CalendarDays className="w-4 h-4" /> Aug 6 – 7, 2025
                  </p>
                </div>
                <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-50 rounded-xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-6">
            Connect with 500,000+ developers, designers, and makers building the future
            through hackathons and collaborative projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
              Join Discord
            </button>
            <button className="bg-white hover:bg-gray-100 text-indigo-600 px-6 py-3 rounded-lg font-medium border border-indigo-200">
              Follow on Twitter
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore All Hackathons</h2>
        <Hackathon />
      </section>
    </div>
  );
}

