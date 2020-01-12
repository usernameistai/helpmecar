import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-hands'></i> <Fragment></Fragment>
          <i class='fas fa-car-alt'></i> <Fragment></Fragment>
          HelpMe - Car        
        </Link>
      </h1>
      <ul>
        <li><Link to='/profiles'>Helpers</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;