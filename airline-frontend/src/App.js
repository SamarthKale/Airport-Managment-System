import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PassengersPage from "./pages/PassengersPage";
import FlightsPage from "./pages/FlightsPage";
import BookingsPage from "./pages/BookingsPage";
import EmployeesPage from "./pages/EmployeesPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";
import PaymentsPage from "./pages/PaymentsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* default route → login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* simple login route */}
        <Route path="/login" element={<LoginPage />} />

        {/* direct access to all pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/passengers" element={<PassengersPage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
