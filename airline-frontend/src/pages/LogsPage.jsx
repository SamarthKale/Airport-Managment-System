import React, { useEffect, useState } from 'react';
import api from '../services/api';

function LogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get('/logs/transactions').then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Transaction Logs</h2>
      <table border="1">
        <thead>
          <tr><th>ID</th><th>Passenger</th><th>Change</th><th>Reason</th><th>Date</th></tr>
        </thead>
        <tbody>
          {logs.map(l => (
            <tr key={l.Txn_ID}>
              <td>{l.Txn_ID}</td>
              <td>{l.Passenger_ID}</td>
              <td>{l.change_amount}</td>
              <td>{l.reason}</td>
              <td>{l.created_on}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogsPage;
