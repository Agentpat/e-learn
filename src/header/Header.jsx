
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const openDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className='header'>
      <div className="logo-container">
        <img src='Landsacpelogo.png' alt='' className='logo' />
      </div>
      <div className='nav-container'>
        <ul className={`nav__links ${showMobileMenu ? 'show' : ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Main Features</Link>
          </li>
          <li>
            <Link to="/courses">Popular Courses</Link>
          </li>
          <li>
            <Link to="/blog">Explore Blog</Link>
          </li>
          <li>
            <Link to="/inner">Inner Page</Link>
          </li>
        </ul>
      </div>
      <div className='buttons'>
        <h3 className='login__btn'><Link to="/login">LOGIN</Link></h3>
        <h3 className='register__btn'><Link to="/register">REGISTER</Link></h3>
        <SettingsIcon className='settings__btn' onClick={openDashboard} />
      </div>
      <div className='mobile__menu'>
      <MenuIcon  onClick={toggleMobileMenu} />
      </div>
      
    </div>
  );
}

export default Header;
