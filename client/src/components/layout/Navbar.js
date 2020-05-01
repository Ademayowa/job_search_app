import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-info m-auto p-4 z-depth-3'>
      <div className='container'>
        <Link className='navbar-brand text-white' to='/'>
          Job Portal
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span />
          <span className='navbar-toggler-icon fa fa-bars text-primary' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Register
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
