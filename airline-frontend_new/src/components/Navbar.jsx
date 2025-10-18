import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/passengers">Passengers</Link>
      <Link to="/flights">Flights</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/departments">Departments</Link>
      <Link to="/logs">Logs</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/payments">Payments</Link>
      <button style={{ float: 'right', background: 'red' }} onClick={logout}>Logout</button>
    </div>
  );
}
export default Navbar;

