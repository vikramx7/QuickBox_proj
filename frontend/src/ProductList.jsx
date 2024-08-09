import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './style.css';
import Navbar from './Navbar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error(error));
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`); // Use navigate to go to the edit page
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchKey.toLowerCase()) ||
    product.description.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="login-root">
      <Navbar />
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh' }}>
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer"></div>
        </div>
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>Products</h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <div className="field padding-bottom--24">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    className="field-input"
                  />
                </div>
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(product => (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>₹{product.price}</td>
                        <td>
                          <button className="btn-edit" onClick={() => handleEdit(product.id)}>Edit</button>
                          <button className="btn-delete" onClick={() => handleDelete(product.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
