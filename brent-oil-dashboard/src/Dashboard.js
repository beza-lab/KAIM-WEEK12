import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [model, setModel] = useState('arima');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const fetchPredictions = () => {
    axios.get(`http://127.0.0.1:5000/api/predictions?model=${model}`)
      .then(response => {
        const predictionDates = Array.from({ length: 30 }, (_, i) => ({
          Date: moment().add(i, 'days').format('YYYY-MM-DD'),
          Prediction: response.data[i]
        }));
        setPredictions(predictionDates);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Brent Oil Price Dashboard</h1>

      <div>
        <label>Select Model: </label>
        <select onChange={e => setModel(e.target.value)} value={model}>
          <option value="arima">ARIMA</option>
          <option value="sarimax">SARIMAX</option>
          <option value="var">VAR</option>
        </select>
        <button onClick={fetchPredictions}>Fetch Predictions</button>
      </div>

      {Array.isArray(data) && (
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="Price" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      )}

      {Array.isArray(predictions) && (
        <LineChart width={600} height={300} data={predictions}>
          <Line type="monotone" dataKey="Prediction" stroke="#82ca9d" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      )}
    </div>
  );
};

export default Dashboard;