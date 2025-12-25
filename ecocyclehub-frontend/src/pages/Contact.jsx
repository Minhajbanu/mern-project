import React, { useState } from "react";
import "../styles/contact.css";
import contactImage from "../assets/images/photo4.jpg";
import { sendContactMessage } from "../api"; // import API helper

function Contact() {
  // Step 1: state for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: form submit handler
  const handleContact = async (e) => {
    e.preventDefault();

    try {
      const data = await sendContactMessage({ firstName, lastName, phone, message });

      alert("Message sent successfully!");

      // Clear form
      setFirstName("");
      setLastName("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      {/* Left Side - Form */}
      <div className="form-section">
        <h2>Contact Us...</h2>
        <form onSubmit={handleContact}>
          <div className="name-fields">
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
            type="text"
            placeholder="Contact Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Message"
            rows="4"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="image-section">
        <div className="text-overlay">
          <h1>Get in touch.</h1>
        </div>
        <img src={contactImage} alt="Contact visual" />
      </div>
    </div>
  );
}

export default Contact;
