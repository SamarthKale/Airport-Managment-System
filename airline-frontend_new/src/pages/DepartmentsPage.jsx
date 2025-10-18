import React, { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    api.get("/departments").then((res) => setDepartments(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Departments</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((d) => (
              <tr key={d.Department_ID}>
                <td>{d.Department_ID}</td>
                <td>{d.Dept_Name}</td>
                <td>{d.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DepartmentsPage;
