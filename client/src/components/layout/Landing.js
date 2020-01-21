import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>HelpMe - Car (Please)</h1>
          <p className='lead'>
            Create a helper profile or don't, share information with the identifier of number plates alone to help your fellow human
          </p>
          <p>Woden hēng fram æsce treó, 
          Fugel sat on stick abúfan,
          Dryppte fram þās fugels muþ,
          Þā word ic secge sægþ þā sōð,
          Þā word ic secge sægþ þā sōð
          </p>
          <Fragment></Fragment>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>Sign Up</Link>
            <Link to='/login' className='btn btn-light'>Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
// connect is interacting with the state to see if we're logged in
