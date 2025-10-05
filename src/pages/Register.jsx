import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await api.post("/api/auth/register", { fullname, phone, email, password });
    alert("Registration submitted. Wait for admin approval.");
    navigate("/login");
  };

  return (
    <div className="div1">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        <input type="text" className="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="email" className="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" className="text" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
}
