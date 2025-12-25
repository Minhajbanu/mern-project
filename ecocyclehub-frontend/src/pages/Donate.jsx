import React from "react";
import { Link } from "react-router-dom"; // Import for navigation
import "../styles/donate.css";

const Donate = () => {
  return (
    <div className="donate-container">
      <h2>Donate your waste...</h2>

      <div className="card-container">
        {/* Organic Waste */}
        <div className="waste-card">
          <h3>ORGANIC WASTE</h3>
          <p>Waste from food and plants that decomposes naturally</p>
          <Link to="/donateorganicwaste">
            <button className="donate-btn">
              Donate Here <span>→</span>
            </button>
          </Link>
        </div>

        {/* Recyclable Waste */}
        <div className="waste-card">
          <h3>RECYCLABLE WASTE</h3>
          <p>Items that can be processed and reused through recycling.</p>
          <Link to="/donateelecwaste">
            <button className="donate-btn">
              Donate Here <span>→</span>
            </button>
          </Link>
        </div>

        {/* Electronic Waste */}
        <div className="waste-card">
          <h3>ELECTRONIC WASTE</h3>
          <p>
            Discarded electronic items that contain valuable or hazardous
            materials.
          </p>
          <Link to="/donaterecyclewaste">
            <button className="donate-btn">
              Donate Here <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donate;
