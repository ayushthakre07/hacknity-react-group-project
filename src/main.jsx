
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home"
import Dashboard from './views/Dashboard';
import About from './views/About'; 
import Hackathon from './views/Hackathon';
import Landing from './views/Landing';
import Login from './views/Login'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Hackathon />
<Routes>
   <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About/>} />
      <Route path="/hackathon" element={<Hackathon />} />
      <Route path="/landing" element={<Landing/>} />
      <Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter>
)
