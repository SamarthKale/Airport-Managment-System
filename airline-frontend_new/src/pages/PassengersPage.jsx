import React, { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function PassengersPage() {
  const [passengers, setPassengers] = useState([]);
  const [amount, setAmount] = useState(0);

  const fetchData = () => {
    api.get("/passengers").then((res) => setPassengers(res.data));
  };

  useEffect(() => { fetchData(); }, []);

  const addMoney = (id) => {
    api.put(`/passengers/${id}/add-money`, { amount }).then(() => {
      alert("Balance updated!");
      fetchData();
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Passengers</h2>
        <input type="number" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Balance</th><th>Action</th></tr>
          </thead>
          <tbody>
            {passengers.map((p) => (
              <tr key={p.Passenger_ID}>
                <td>{p.Passenger_ID}</td>
                <td>{p.full_name}</td>
                <td>{p.email}</td>
                <td>{p.balance}</td>
                <td><button onClick={() => addMoney(p.Passenger_ID)}>➕ Add Money</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PassengersPage;
