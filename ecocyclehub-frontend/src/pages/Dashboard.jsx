import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:5000/api/donations/my-donations",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDonations(res.data);
      } catch (err) {
        console.error("Error fetching donations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">My Donation History</h2>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : donations.length === 0 ? (
        <p className="no-donations">No donations yet.</p>
      ) : (
        <div className="table-wrapper">
          <table className="donation-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d._id}>
                  <td>{d.category}</td>
                  <td>
                    <span className={`status ${d.status.toLowerCase()}`}>
                      {d.status}
                    </span>
                  </td>
                  <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
