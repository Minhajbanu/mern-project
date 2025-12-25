import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Signup from "./pages/Signup";
import Login from "./pages/LoginForm";
import Contact from "./pages/Contact";
import DonateOrganicWaste from "./pages/DonateOrganicWaste";
import DonateElecWaste from "./pages/DonateElecWaste";
import DonateRecycleWaste from "./pages/DonateRecycleWaste";


import Dashboard from "./pages/Dashboard";


import "./styles/theme.css";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />    {/* Default route */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginform" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donateorganicwaste" element={<DonateOrganicWaste />} />
        <Route path="/donateelecwaste" element={<DonateElecWaste />} />
        <Route path="/donaterecyclewaste" element={<DonateRecycleWaste />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
        
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
