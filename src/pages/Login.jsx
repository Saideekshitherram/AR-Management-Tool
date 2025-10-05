import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/auth/login", { email, password });
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="div1">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" className="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="button">Login</button>
      </form>
      <h6>
        New user? <Link to="/register">Register here</Link>
      </h6>
    </div>
  );
}
