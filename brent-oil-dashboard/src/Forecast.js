import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Forecast = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/forecast')
            .then((response) => response.json())
            .then((data) => setForecast(data));
    }, []);

    return (
        <div>
            <h2>Forecasted Prices</h2>
            <BarChart
                width={900}
                height={500}
                data={forecast}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Price" fill="#82ca9d" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Forecast;
