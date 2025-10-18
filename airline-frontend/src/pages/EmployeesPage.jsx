import React from "react";
import Navbar from "../components/Navbar";

function EmployeesPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Employees</h2>
        <p>Displays all employee records.</p>
      </div>
    </>
  );
}

export default EmployeesPage;
