import React, { useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ScatterPlot = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/historical-trends') // Ensure this includes GDP data
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h2>Correlation: GDP Growth vs Oil Prices</h2>
            <ScatterChart
                width={900}
                height={500}
                margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="GDP_Growth" name="GDP Growth" />
                <YAxis type="number" dataKey="Price" name="Oil Price" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={data} fill="#8884d8" />
            </ScatterChart>
        </div>
    );
};

export default ScatterPlot;
