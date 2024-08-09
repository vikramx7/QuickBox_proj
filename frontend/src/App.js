import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Navbar from './Navbar';
import SellerDashboard from './SellerDashboard';
import LoginRegister from './LoginRegister';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place Navbar outside of Routes to make it appear on every page */}
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<ProductForm />} /> {/* Dynamic route for editing */}
        <Route path="/dash" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
