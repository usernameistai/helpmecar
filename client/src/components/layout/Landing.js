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
          <Link to='/reg' className='lan'><h1 className='x-large my-1'>HelpMe - Car</h1></Link>
          <p className='leadland'>
            Share helpful information about someone's car, if it needs it. Create a helper profile if you would like
          </p>

          <div className='my-1'>
            <p>If you see a fault with someone's car, this is a way of letting them know</p>
            <p>Simply choose from a selection of various problems</p>
            <p>Help someone out</p>
          </div>

          <div className='lead'>
            <Link to='/reg' className='neon-button'>This Way To Help Someone's Car</Link>
          </div>   

          {/* <div className='lead'>
            <Link to='/reg' className='btn btn-danger neon-button'>This Way To Help Someone's Car</Link>
          </div>    */}





          
          <Fragment> 
           {!isAuthenticated 
              ? <div className='button my-1'>
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
