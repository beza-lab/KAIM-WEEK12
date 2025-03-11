import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const HistoricalTrends = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/historical-trends')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h2>Historical Price Trends</h2>
            <LineChart
                width={900}
                height={500}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Price" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </div>
    );
};

export default HistoricalTrends;
