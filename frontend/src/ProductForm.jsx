import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductForm.css'; // Import the CSS file
import Navbar from './Navbar'; // Import the Navbar component

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/api/products/${id}`)
        .then(response => {
          const product = response.data;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, description, price };
    if (id) {
      axios.put(`http://localhost:3001/api/products/${id}`, data)
        .then(() => {
          navigate('/product');
        })
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:3001/api/products', data)
        .then(() => {
          navigate('/product');
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar here */}
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">{id ? 'Save' : 'Create'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
