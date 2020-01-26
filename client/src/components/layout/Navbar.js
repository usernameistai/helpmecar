import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          <i className='fas fa-hands'></i>{' '}
          <span className="hide-sm">Helpers</span>
        </Link>
      </li>
      <li>
        <Link to='/posts'>
        <i className='far fa-comment-dots'></i>{' '}
        <span className="hide-sm">Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={ logout } to='#!'>
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to='/profiles'>Helpers</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-hands'></i> <Fragment></Fragment>
          <i className='fas fa-car-alt'></i> <Fragment></Fragment>
          HelpMe - Car        
        </Link>
      </h1>
      { !loading && (
        <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
// connect is interacting with the state to see if we're logged in