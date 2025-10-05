import React from "react";

export default function ClaimTable({ claims }) {
  return (
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
  );
}
