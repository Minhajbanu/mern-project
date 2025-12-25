import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


// Signup
export const signup = async (userData) => {
  const res = await axios.post(`${API_URL}/auth/signup`, userData);
  return res.data;
};

// Login
export const login = async (userData) => {
  const res = await axios.post(`${API_URL}/auth/login`, userData);
  return res.data;
};

// Get all donations (protected route example)
export const getDonations = async (token) => {
  const res = await axios.get(`${API_URL}/donations`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

// Add donation
export const addDonation = async (donationData, token) => {
  const res = await axios.post(`${API_URL}/donations`, donationData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};
// Send contact message
export const sendContactMessage = async (contactData) => {
  const res = await axios.post(`${API_URL}/contact`, contactData);
  return res.data;
};

