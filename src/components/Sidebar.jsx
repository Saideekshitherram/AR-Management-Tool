import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../grid.css";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar-container">
      {/* Active Claims */}
      <div>
        <div className="menu-item" onClick={() => toggleMenu("active")}>
          <span>Active Claims</span>
          <span>{openMenu === "active" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "active" && (
          <div className="submenu">
            <Link to="/era-received" className="submenu-item">ERA Received</Link>
            <Link to="/in-process-clearinghouse" className="submenu-item">In Process @ Clearinghouse</Link>
            <Link to="/in-process-payer" className="submenu-item">In Process @ Payer</Link>
            <Link to="/completed" className="submenu-item">Completed</Link>
          </div>
        )}
      </div>

      {/* Inactive Claims */}
      <div>
        <div className="menu-item" onClick={() => toggleMenu("inactive")}>
          <span>Inactive Claims</span>
          <span>{openMenu === "inactive" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "inactive" && (
          <div className="submenu">
            <Link to="/rejected" className="submenu-item">Rejected</Link>
            <Link to="/era-denied" className="submenu-item">ERA Denied</Link>
            <Link to="/not-submitted" className="submenu-item">Not Submitted</Link>
            <Link to="/missing-information" className="submenu-item">Missing Information</Link>
          </div>
        )}
      </div>

      {/* Dashboard */}
      <div>
        <div className="menu-item" onClick={() => toggleMenu("dashboard")}>
          <span>Dashboard</span>
          <span>{openMenu === "dashboard" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "dashboard" && (
          <div className="submenu">
            <Link to="/ar-aging" className="submenu-item">AR Aging</Link>
            <Link to="/denial-management" className="submenu-item">Denial Management</Link>
            <Link to="/payment-performance" className="submenu-item">Payment Performance</Link>
          </div>
        )}
      </div>

      {/* Payments */}
      <div>
        <div className="menu-item" onClick={() => toggleMenu("payments")}>
          <span>Payments</span>
          <span>{openMenu === "payments" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "payments" && (
          <div className="submenu">
            <Link to="/payment-completed" className="submenu-item">Payment Completed</Link>
            <Link to="/partial-payment" className="submenu-item">Partial Payment</Link>
            <Link to="/pending" className="submenu-item">Pending</Link>
          </div>
        )}
      </div>

      {/* Users */}
      <div>
        <div className="menu-item" onClick={() => toggleMenu("users")}>
          <span>Users</span>
          <span>{openMenu === "users" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "users" && (
          <div className="submenu">
            <Link to="/users" className="submenu-item">Manage Users</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
