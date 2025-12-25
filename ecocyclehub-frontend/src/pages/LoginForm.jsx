import React, { useState } from "react";
import "../styles/loginform.css";
import loginImage from "../assets/images/photo4.jpg";
import { login } from "../api"; // import the API helper

function Login() {
  // Step 1: state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: form submit handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Use the API helper instead of fetch
      const data = await login({ email, password });

      // Save token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      

      alert("Login successful!");
      // TODO: Redirect to donations page or dashboard
    } catch (err) {
      console.error(err);
      // Check if API sent a message
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      {/* Left Login Form */}
      <div className="form-section">
        <h2>Login in to your Account</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit">Log In</button>
        </form>
        <p className="signup-text">
          If not registered? <a href="/signup">Sign up</a>
        </p>
      </div>

      {/* Right Image Section */}
      <div className="image-section">
        <img src={loginImage} alt="Login visual" />
      </div>
    </div>
  );
}

export default Login;
