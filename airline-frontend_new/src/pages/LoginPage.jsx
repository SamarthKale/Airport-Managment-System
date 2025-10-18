import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Directly go to dashboard (no auth needed)
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Airline Admin Login</h2>
      <p>This is a demo login — no backend required.</p>
      <button onClick={handleLogin}>Enter System</button>
    </div>
  );
}

export default LoginPage;
