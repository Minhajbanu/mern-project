import React, { useState } from "react";
import "../styles/signup.css";
import signupImage from "../assets/images/photo4.jpg";
import { signup } from "../api"; // import API helper

function Signup() {
  // Step 1: state for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: form submit handler
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Use API helper
      const data = await signup({ name, email, password });

      // Save token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Signup successful!");
      // TODO: Redirect to login or dashboard page
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      {/* Left Form Section */}
      <div className="form-section">
        <h2>Create New Account</h2>
        <form onSubmit={handleSignup}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
        <p className="login-text">
          Already Registered? <a href="/loginForm">Login</a>
        </p>
      </div>

      {/* Right Image Section */}
      <div className="image-section">
        <img src={signupImage} alt="Signup visual" />
      </div>
    </div>
  );
}

export default Signup;
