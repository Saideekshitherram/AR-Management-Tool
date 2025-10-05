import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState({});
  const toggle = (key) => setOpen({ ...open, [key]: !open[key] });

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">AR Management</h2>

      {/* Active Claims */}
      <div>
        <button onClick={() => toggle("active")} className="w-full text-left">
          Active Claims
        </button>
        {open.active && (
          <ul className="ml-4">
            <li><Link to="/claims/ERA Received">ERA Received</Link></li>
            <li><Link to="/claims/In Process Clearinghouse">In Process @ Clearinghouse</Link></li>
            <li><Link to="/claims/In Process Payer">In Process @ Payer</Link></li>
            <li><Link to="/claims/Completed">Completed</Link></li>
          </ul>
        )}
      </div>

      {/* Repeat for Inactive, Dashboard, Payments ... */}
    </div>
  );
}
