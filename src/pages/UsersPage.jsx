import React, { useEffect, useState } from 'react';
import api from '../api/api';


export default function UsersPage() {
const [users, setUsers] = useState([]);


const fetchUsers = async () => {
const res = await api.get('/api/users/pending');
setUsers(res.data);
};


const handleAction = async (id, action) => {
await api.post(`/api/users/${id}/${action}`);
fetchUsers();
};


useEffect(() => {
fetchUsers();
}, []);


return (
<div className="p-6">
<h2 className="text-lg font-bold mb-4">User Management</h2>
<table className="w-full border">
<thead>
<tr className="bg-gray-200">
<th className="p-2 border">Email</th>
<th className="p-2 border">Action</th>
</tr>
</thead>
<tbody>
{users.map(user => (
<tr key={user.id}>
<td className="p-2 border">{user.email}</td>
<td className="p-2 border">
<button onClick={() => handleAction(user.id, 'accept')} className="bg-green-600 text-white px-2 py-1 rounded mr-2">Accept</button>
<button onClick={() => handleAction(user.id, 'reject')} className="bg-red-600 text-white px-2 py-1 rounded">Reject</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}