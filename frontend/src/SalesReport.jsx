// SalesReport.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all necessary components and scales
Chart.register(...registerables);

const SalesReport = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.date), // Extract dates for labels
    datasets: [
      {
        label: 'Sales',
        data: data.map((entry) => entry.sales), // Extract sales values
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'lightblue',
      },
    ],
  };

  return (
    <div className="sales-report">
      <h2>Sales Report</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SalesReport;
