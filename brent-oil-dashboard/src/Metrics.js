import React, { useEffect, useState } from 'react';

const Metrics = () => {
    const [metrics, setMetrics] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/metrics')
            .then((response) => response.json())
            .then((data) => setMetrics(data));
    }, []);

    return (
        <div>
            <h2>Model Metrics</h2>
            <div className="metrics-container">
                <div className="card">
                    <h3>RMSE</h3>
                    <p>{metrics.RMSE}</p>
                </div>
                <div className="card">
                    <h3>MAE</h3>
                    <p>{metrics.MAE}</p>
                </div>
                <div className="card">
                    <h3>R-squared</h3>
                    <p>{metrics['R-squared']}</p>
                </div>
            </div>
        </div>
    );
};

export default Metrics;
