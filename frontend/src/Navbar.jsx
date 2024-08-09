import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const updateSelector = () => {
      const activeItem = document.querySelector('.nav-item.active');
      if (activeItem) {
        const { top, left, width, height } = activeItem.getBoundingClientRect();
        const selector = document.querySelector('.hori-selector');
        if (selector) {
          selector.style.top = `${top}px`;
          selector.style.left = `${left}px`;
          selector.style.height = `${height}px`;
          selector.style.width = `${width}px`;
        }
      }
    };

    updateSelector();
    window.addEventListener('resize', updateSelector);

    return () => {
      window.removeEventListener('resize', updateSelector);
    };
  }, [activeIndex]);

  const navItems = [
    { name: 'Dashboard', icon: 'tachometer-alt', path: '/dash' },
    { name: 'Product List', icon: 'address-book', path: '/product' },
    { name: 'Product Form', icon: 'clone', path: '/add-product' },
    
  ];

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => document.querySelector('.navbar-collapse').classList.toggle('show')}
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleNavItemClick(index)}
            >
              <Link className="nav-link" to={item.path}>
                <i className={`fas fa-${item.icon}`}></i>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
