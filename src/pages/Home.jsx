import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import IncomeAnalysis from '../components/IncomeAnalysis';
import ClaimsTable from '../components/ClaimTable';
import api from '../api/api';


export default function Home() {
const [selected, setSelected] = useState(null);
const [data, setData] = useState([]);


useEffect(() => {
if (selected) {
api.get(`/api/claims?type=${selected}`).then(res => setData(res.data));
}
}, [selected]);


return (
<div className="flex">
<Sidebar onSelect={setSelected} />
<div className="flex-1 p-6">
<IncomeAnalysis />
{selected && <ClaimsTable heading={selected} data={data} />}
</div>
</div>
);
}