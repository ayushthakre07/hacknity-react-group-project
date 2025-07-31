import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import Hackathon from "./views/Hackathon";
import Organize from "./views/Organize";
import Login from "./views/Login";
import DiscoverPage from "./views/Discover";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/hackathon" element={<Hackathon />} />
      <Route path="/organize" element={<Organize />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);