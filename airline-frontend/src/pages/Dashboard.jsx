import React from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Admin Dashboard</h2>
        <p>Welcome! Use the navigation bar to view or manage system data.</p>
      </div>
    </>
  );
}

export default Dashboard;
