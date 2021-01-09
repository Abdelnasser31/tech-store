import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <span className='logo'>Logo</span>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
      { currentUser ? 
      <div className='option' onClick={() => auth.signOut()}>Sign out</div> :
      <Link to='/signin' className='option'>Sign in</Link>}
    </div>
  </div>
)

export default Header;