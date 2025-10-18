import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = localStorage.getItem("adminAuth");
  return auth ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
