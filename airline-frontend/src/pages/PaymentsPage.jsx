import React, { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function PaymentsPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get("/payments").then((res) => setPayments(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Payments</h2>
        <p>This shows mock payments made for booked flights.</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Bill ID</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.Payment_ID}>
                <td>{p.Payment_ID}</td>
                <td>{p.Bill_ID}</td>
                <td>{p.method}</td>
                <td>{p.amount}</td>
                <td>{p.status}</td>
                <td>{p.paid_on}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PaymentsPage;
