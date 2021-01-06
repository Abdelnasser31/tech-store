import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <span className='logo'>Logo</span>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
    </div>
  </div>
)

export default Header;