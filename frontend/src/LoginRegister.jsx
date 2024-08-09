import React, { useState } from 'react';
import './LoginRegister.css'; // Assuming you save your CSS in LoginRegister.css
import { Link } from 'react-router-dom';

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="loginWrapper">
      <ul className="tabs">
        <li
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => handleTabChange('login')}
        >
          Login
        </li>
        <li
          className={activeTab === 'register' ? 'active' : ''}
          onClick={() => handleTabChange('register')}
        >
          Register
        </li>
      </ul>

      <ul className="tab__content">
        <li className={activeTab === 'login' ? 'active' : ''}>
          <div className="content__wrapper">
            <form method="POST" action="">
              <input type="email" name="email" placeholder="email" />
              <input type="password" name="password" placeholder="Password" />
              <Link to={'/product'}>
              <input type="submit" value="Login" name="login" /></Link>
            </form>
          </div>
        </li>

        <li className={activeTab === 'register' ? 'active' : ''}>
          <div className="content__wrapper">
            <form method="POST" action="">
              <input type="text" name="name" placeholder="Username" />
              <input type="email" name="email" placeholder="email" />
              <input type="password" name="pass" placeholder="Password" />
              <input type="password" name="repass" placeholder="Repeat-Password" />
              <input type="submit" value="Register" name="register" />
            </form>
          </div>
        </li>
      </ul>

      <div className="logginFormFooter">
        &copy; 2015-{new Date().getFullYear()} Matthew Bryce <a href="#">awebsite.com</a>
      </div>
    </section>
  );
};

export default LoginRegister;
