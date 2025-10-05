import React, { useState } from "react";

export default function ARLayout() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (menu) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  return (
    <div className="grid grid-cols-4 grid-rows-6 h-screen border-4 border-gray-800">
      {/* Sidebar (col 1, full height) */}
      <div className="col-span-1 row-span-6 bg-gray-900 text-white border-r-4 border-gray-700 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          AR Management Tool
        </h1>

        {/* Active Claims */}
        <div>
          <button
            onClick={() => handleClick("active")}
            onDoubleClick={() => setOpenMenu(null)}
            className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded"
          >
            Active Claims
          </button>
          {openMenu === "active" && (
            <ul className="ml-4 space-y-1 border-l border-gray-600 pl-2">
              <li>ERA Received</li>
              <li>In Process @ Clearinghouse</li>
              <li>In Process @ Payer</li>
              <li>Completed</li>
            </ul>
          )}
        </div>

        {/* Inactive Claims */}
        <div>
          <button
            onClick={() => handleClick("inactive")}
            onDoubleClick={() => setOpenMenu(null)}
            className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded mt-2"
          >
            Inactive Claims
          </button>
          {openMenu === "inactive" && (
            <ul className="ml-4 space-y-1 border-l border-gray-600 pl-2">
              <li>Rejected</li>
              <li>ERA Denied</li>
              <li>Not Submitted</li>
              <li>Missing Info</li>
            </ul>
          )}
        </div>

        {/* Dashboard */}
        <div>
          <button
            onClick={() => handleClick("dashboard")}
            onDoubleClick={() => setOpenMenu(null)}
            className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded mt-2"
          >
            Dashboard
          </button>
          {openMenu === "dashboard" && (
            <ul className="ml-4 space-y-1 border-l border-gray-600 pl-2">
              <li>AR Aging</li>
              <li>Denial Management</li>
              <li>Payment Performance</li>
            </ul>
          )}
        </div>

        {/* Payments */}
        <div>
          <button
            onClick={() => handleClick("payments")}
            onDoubleClick={() => setOpenMenu(null)}
            className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded mt-2"
          >
            Payments
          </button>
          {openMenu === "payments" && (
            <ul className="ml-4 space-y-1 border-l border-gray-600 pl-2">
              <li>Payment Completed</li>
              <li>Partial Payment</li>
              <li>Pending</li>
            </ul>
          )}
        </div>

        {/* Users */}
        <div>
          <button className="w-full text-left py-2 font-semibold hover:bg-gray-700 rounded mt-2">
            Users
          </button>
        </div>
      </div>

      {/* Top Right (Income Analysis) */}
      <div className="col-span-3 row-span-2 border-b-4 border-gray-800 flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">Income Analysis</h2>
      </div>

      {/* Bottom Right (Pie Chart) */}
      <div className="col-span-3 row-span-4 bg-white flex flex-col items-center justify-center border-t-4 border-gray-800">
        <h3 className="text-xl font-semibold mb-4">
          Piechart of Income Analysis (Monthly)
        </h3>
        <div className="w-64 h-64 rounded-full border-4 border-gray-600 flex items-center justify-center text-gray-500">
          Pie Chart Here
        </div>
      </div>
    </div>
  );
}
