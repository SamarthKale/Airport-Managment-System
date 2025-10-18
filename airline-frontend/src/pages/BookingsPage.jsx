import React, { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function BookingsPage() {
  const [passenger_id, setPassengerId] = useState("");
  const [flight_id, setFlightId] = useState("");
  const [seat_no, setSeatNo] = useState("");

  const book = () => {
    api.post("/bookings", { passenger_id, flight_id, cabin_class: "Economy", seat_no })
      .then((res) => alert(res.data.message));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Book Flight</h2>
        <input placeholder="Passenger ID" onChange={(e) => setPassengerId(e.target.value)} /> <br/>
        <input placeholder="Flight ID" onChange={(e) => setFlightId(e.target.value)} /> <br/>
        <input placeholder="Seat No" onChange={(e) => setSeatNo(e.target.value)} /> <br/>
        <button onClick={book}>Book</button>
      </div>
    </>
  );
}

export default BookingsPage;
