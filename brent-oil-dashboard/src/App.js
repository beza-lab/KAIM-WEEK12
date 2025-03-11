import React from 'react';
import HistoricalTrends from './HistoricalTrends';
import Forecast from './Forecast';
import ScatterPlot from './ScatterPlot';
import Metrics from './Metrics';

function App() {
    return (
        <div>
            <h1>Brent Oil Dashboard</h1>
            <HistoricalTrends />
            <Forecast />
            <ScatterPlot />
            <Metrics />
        </div>
    );
}

export default App;
