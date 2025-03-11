from flask import Flask, jsonify, request
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests (connect React and Flask)

# Load datasets
data = pd.read_csv('D:\KAIM\Week 12\KAIM WEEK12/notebooks/Cleaned_BrentOilPrices.csv')  # Historical trends dataset
forecast = pd.read_csv('D:\KAIM\Week 12\KAIM WEEK12/notebooks/VAR_Forecast_Results.csv')  # Forecast data
model_metrics = {
    "RMSE": 4.12,
    "MAE": 3.87,
    "R-squared": 0.92
}
@app.route('/')
def home():
    return "Welcome to the Brent Oil Dashboard API! Use /api/historical-trends, /api/forecast, or /api/metrics to access data."


# Define API endpoints
@app.route('/api/historical-trends', methods=['GET'])
def historical_trends():
    """Serve historical price data."""
    return jsonify(data.to_dict(orient='records'))

@app.route('/api/forecast', methods=['GET'])
def forecast_prices():
    """Serve forecasted price data."""
    return jsonify(forecast.to_dict(orient='records'))

@app.route('/api/metrics', methods=['GET'])
def model_metrics_api():
    """Serve model performance metrics."""
    return jsonify(model_metrics)

if __name__ == '__main__':
    app.run(debug=True)
