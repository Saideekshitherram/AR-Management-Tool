import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ClaimPage() {
  const { type } = useParams();
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/claims/${type}`)
      .then((res) => setClaims(res.data))
      .catch((err) => console.error(err));
  }, [type]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{type} Claims</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((c) => (
            <tr key={c.id}>
              <td className="border px-4 py-2">{c.id}</td>
              <td className="border px-4 py-2">{c.description}</td>
              <td className="border px-4 py-2">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
