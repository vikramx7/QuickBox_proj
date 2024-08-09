// SellerDashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SalesReport from './SalesReport';
import RecentTransactions from './RecentTransaction';
import './SellerDashboard.css'; // Ensure correct path to CSS file

const SellerDashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch sales data
    axios
      .get('http://localhost:3001/api/sales')
      .then((response) => setSalesData(response.data))
      .catch((error) => console.error('Error fetching sales data:', error));

    // Fetch recent transactions
    axios
      .get('http://localhost:3001/api/transactions')
      .then((response) => setTransactions(response.data))
      .catch((error) =>
        console.error('Error fetching transactions data:', error)
      );
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Seller Dashboard</h1>
      <div className="dashboard-content">
        <SalesReport data={salesData} />
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
};

export default SellerDashboard;
