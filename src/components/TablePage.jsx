import React, { useEffect, useState } from "react";

function TablePage({ endpoint, title }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/claims/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  return (
    <div>
      <h2 style={{ marginBottom: "20px", color: "#1e3d59" }}>{title}</h2>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.description}</td>
                <td>{row.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
