import React, { useState } from "react";
import {
  Flame,
  CalendarDays,
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
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Hackathon1 from "../assets/onchain-summer-awards.png";
import Hackathon2 from "../assets/ai-innovation-challenge.png";
import Hackathon3 from "../assets/devstart-bootcamp.png";
import Hackathon4 from "../assets/codekickstart.png";
import Hackathon5 from "../assets/mega-prize-hack.png";
import Hackathon6 from "../assets/crypto-challenge-cup.png";
import Hackathon7 from "../assets/ai-climate-hack.png";
import Hackathon8 from "../assets/open-source-surge.png";
import Hackathon9 from "../assets/remote-devfest.png";
import Hackathon10 from "../assets/cyber-online.png";
import Hackathon11 from "../assets/nextgen-hack.png";
import Hackathon12 from "../assets/quick-start.png";

export default function DiscoverPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "featured", name: "Featured", icon: <Star size={18} /> },
    { id: "beginner", name: "Beginner Friendly", icon: <User size={18} /> },
    { id: "prizes", name: "Big Prizes", icon: <Trophy size={18} /> },
    { id: "trending", name: "Trending", icon: <TrendingUp size={18} /> },
    { id: "online", name: "Online", icon: <Globe size={18} /> },
    { id: "soon", name: "Starting Soon", icon: <Zap size={18} /> },
    { id: "all", name: "All Hackathons", icon: <Code2 size={18} /> },
  ];

  const hackathons = [
    {
      id: 1,
      category: "featured",
      title: "Onchain Summer Awards",
      description:
        "Build. Launch. Scale. Earn. This summer's top web3 hackathon!",
      date: "Jul 9 – Aug 26, 2025",
      location: "Online",
      prize: "Rs. 250K+ in prizes",
      participants: "1,200+ registered",
      image: Hackathon1,
      deadline: "28d:11h:28m",
      tags: ["web3", "blockchain", "ethereum"],
    },
    {
      id: 2,
      category: "featured",
      title: "AI Innovation Challenge",
      description: "Build the next generation of AI applications",
      date: "Aug 15 – Sep 15, 2025",
      location: "Online & SF Finals",
      prize: "Rs. 100K in prizes",
      participants: "800+ registered",
      image: Hackathon2,
      deadline: "42d:05h:12m",
      tags: ["ai", "ml", "generative"],
    },
    {
      id: 3,
      category: "beginner",
      title: "DevStart Bootcamp",
      description: "A beginner-friendly hackathon to launch your dev journey",
      date: "Aug 10 – Aug 20, 2025",
      location: "Online",
      prize: "Rs. 10K in prizes",
      participants: "500+ registered",
      image: Hackathon3,
      deadline: "15d:04h:11m",
      tags: ["beginner", "frontend", "html"],
    },
    {
      id: 4,
      category: "beginner",
      title: "CodeKickstart",
      description: "Beginner focused challenge with mentorship",
      date: "Sep 1 – Sep 10, 2025",
      location: "Online",
      prize: "Rs. 5K in prizes",
      participants: "350+ registered",
      image: Hackathon4,
      deadline: "30d:10h:00m",
      tags: ["beginner", "html", "css"],
    },
    {
      id: 5,
      category: "prizes",
      title: "Mega Prize Hack",
      description: "Show off your skills and win big prizes! Hurry Up!",
      date: "Aug 25 – Sep 5, 2025",
      location: "Online",
      prize: "Rs. 500K in prizes",
      participants: "2,000+ registered",
      image: Hackathon5,
      deadline: "25d:05h:00m",
      tags: ["web", "cloud", "prize"],
    },
    {
      id: 6,
      category: "prizes",
      title: "Crypto Challenge Cup",
      description: "Blockchain and crypto-focused hackathon with big bounties",
      date: "Sep 10 – Sep 25, 2025",
      location: "Online",
      prize: "Rs. 300K in prizes",
      participants: "1,100+ registered",
      image: Hackathon6,
      deadline: "39d:08h:44m",
      tags: ["crypto", "security", "web3"],
    },
    {
      id: 7,
      category: "trending",
      title: "AI x Climate Hack",
      description: "Tackle climate change with the power of AI",
      date: "Aug 20 – Sep 10, 2025",
      location: "Online",
      prize: "Rs. 120K in prizes",
      participants: "1,000+ registered",
      image: Hackathon7,
      deadline: "33d:01h:33m",
      tags: ["ai", "climate", "ml"],
    },
    {
      id: 8,
      category: "trending",
      title: "Open Source Surge",
      description: "Contribute to open source and win big prizes",
      date: "Aug 28 – Sep 18, 2025",
      location: "Online",
      prize: "Rs. 80K in prizes",
      participants: "950+ registered",
      image: Hackathon8,
      deadline: "37d:22h:00m",
      tags: ["opensource", "devtools"],
    },
    {
      id: 9,
      category: "online",
      title: "Remote DevFest",
      description: "Build from anywhere, collaborate globally and win big!",
      date: "Sep 1 – Sep 30, 2025",
      location: "Online",
      prize: "Rs. 200K in prizes",
      participants: "1,300+ registered",
      image: Hackathon9,
      deadline: "45d:00h:00m",
      tags: ["remote", "global", "web"],
    },
    {
      id: 10,
      category: "online",
      title: "CyberSecure Online",
      description: "Online-only cybersecurity hackathon",
      date: "Aug 5 – Aug 25, 2025",
      location: "Online",
      prize: "Rs. 90K in prizes",
      participants: "720+ registered",
      image: Hackathon10,
      deadline: "20d:10h:50m",
      tags: ["security", "online", "tools"],
    },
    {
      id: 11,
      category: "soon",
      title: "NextGen Hack",
      description: "Starts in just a few days. Get ready!",
      date: "Aug 1 – Aug 10, 2025",
      location: "Online",
      prize: "Rs. 50K in prizes",
      participants: "600+ registered",
      image: Hackathon11,
      deadline: "3d:12h:00m",
      tags: ["soon", "startup", "mobile"],
    },
    {
      id: 12,
      category: "soon",
      title: "Quick Start Sprint",
      description: "Short hackathon, big ideas!",
      date: "Aug 2 – Aug 5, 2025",
      location: "Online",
      prize: "Rs. 20K in prizes",
      participants: "400+ registered",
      image: Hackathon12,
      deadline: "2d:22h:45m",
      tags: ["quick", "short", "launch"],
    },
  ];

  const trendingProjects = [
    {
      id: 1,
      title: "ChillQuest",
      description: "Interactive chill game project with NFT rewards",
      likes: 311,
      tags: ["gaming", "web3", "unity"],
      team: "Pixel Pioneers",
    },
    {
      id: 2,
      title: "Matrix",
      description:
        "Learn new programming languages through interactive challenges",
      likes: 135,
      tags: ["education", "web"],
      team: "Code Alchemists",
    },
    {
      id: 3,
      title: "EcoTrack",
      description: "Carbon footprint tracker with blockchain verification",
      likes: 278,
      tags: ["sustainability", "blockchain"],
      team: "Green Hackers",
    },
  ];

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
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black flex items-center gap-2">
              <Flame className="text-orange-500" />{" "}
              {activeCategory === "all"
                ? "All Hackathons"
                : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <button className="text-lime-500 hover:text-lime-600 font-medium">
              View all
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {hackathons
              .filter(
                (h) =>
                  (activeCategory === "all" || h.category === activeCategory) &&
                  h.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((hackathon) => (
                <div
                  key={hackathon.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="h-68 w-full object-fill"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-black">
                          {hackathon.title}
                        </h3>
                        <p className="text-gray-700 mt-1">
                          {hackathon.description}
                        </p>
                      </div>
                      <span className="bg-lime-100 text-lime-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {hackathon.category.charAt(0).toUpperCase() +
                          hackathon.category.slice(1)}
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
                        Applications close in{" "}
                        <strong className="animate-pulse">
                          {hackathon.deadline}
                        </strong>
                      </p>
                      <Button BtnTitle="Apply Now" />
                    </div>
                  </div>
                </div>
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
