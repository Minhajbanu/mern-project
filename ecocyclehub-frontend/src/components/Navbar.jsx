import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">ECOCYCLEHUB</div>

      <div className="nav-links">
        <Link to="/hero">Home</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/donate">Donate Waste</Link>

        {/* Dashboard Links */}
        <Link to="/dashboard">Dashboard</Link>         {/* User Dashboard */}
        
      </div>

      <div className="nav-buttons">
        <Link to="/loginform" className="nav-btn">
          Log in
        </Link>
        <Link to="/signup" className="nav-btn">
          Sign up
        </Link>
        


        {/* Theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
