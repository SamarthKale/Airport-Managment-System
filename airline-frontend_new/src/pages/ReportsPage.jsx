import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    api.get('/bookings').then(res => setReports(res.data));
  }, []);

  return (
    <div>
      <h2>Booking Summary Report</h2>
      <table border="1">
        <thead>
          <tr><th>Booking ID</th><th>Passenger</th><th>Flight</th><th>Seat</th><th>Class</th><th>Status</th></tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.Booking_ID}>
              <td>{r.Booking_ID}</td>
              <td>{r.Passenger_Name}</td>
              <td>{r.flight_no}</td>
              <td>{r.seat_no}</td>
              <td>{r.cabin_class}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportsPage;
