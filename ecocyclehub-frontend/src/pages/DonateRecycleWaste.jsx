import React, { useState } from "react";
import "../styles/donaterecyclewaste.css";
import { addDonation } from "../api"; // import API helper

export default function DonateRecycleWaste() {
  // Step 1: state for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  // Step 2: form submit handler
  const handleDonation = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please log in before submitting a donation.");
        return;
      }

      const donationData = {
        category: "recyclable",
        firstName,
        lastName,
        email,
        phone,
        address,
        description,
      };

      // Use API helper
      const data = await addDonation(donationData, token);

      alert("Recyclable Waste donation submitted successfully!");

      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setDescription("");
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Failed to submit donation. Please try again.");
      }
    }
  };

  return (
    <div className="donate-container">
      {/* Left Form Section */}
      <div className="form-section">
        <h2>DONATE RECYCLABLE WASTE</h2>
        <form onSubmit={handleDonation}>
          <div className="name-row">
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <textarea
            placeholder="Description of your Waste"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
