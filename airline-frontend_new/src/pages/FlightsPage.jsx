import React from "react";
import Navbar from "../components/Navbar";

function FlightsPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Flights</h2>
        <p>Displays all flight details.</p>
      </div>
    </>
  );
}

export default FlightsPage;
