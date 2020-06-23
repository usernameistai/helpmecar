import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; // , Redirect 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ auth: {isAuthenticated, loading} }) => {
  // if(isAuthenticated) {
  //   return <Redirect to='/reg' />
  // }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <Link to='/reg-home'><h1 className='x-large my-1'>HelpMe - Car (Please)</h1></Link>
          <p className='lead'>
            Create a helper profile or don't, share information about a car via the means of registration plate alone, we only want to help
          </p>
          <div className='lead'>
            <Link to='/reg' className='btn btn-danger'>This Way To Help Someone's Car</Link>
          </div>    
          <div className='my-1'>
            <p>If you see a fault with someone's car, this is a way of letting them know</p>
            <p>Simply choose from a selection of various problems</p>
            <p>Help someone out</p>
          </div>
          <Fragment> 
           {!isAuthenticated 
              ? <div className='button'>
                  <Link to='/register' className='btn btn-primary'>Sign Up</Link>
                  <Link to='/login' className='btn btn-light'>Login</Link>
                </div> 
              : null
            }
          </Fragment>
        </div>
      </div>
    </section>
  );
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
// connect is interacting with the state to see if we're logged in
