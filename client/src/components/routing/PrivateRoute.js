// This is a good way of having routes that require logins
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

  // the rest operator gets any other parameters that are passed in
const PrivateRoute = ({ 
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest 
}) => (
  <Route 
    {...rest} 
    render={props => 
      !isAuthenticated && !loading ? ( 
        <Redirect to='/login' />
      ) : (
        <Component {...props} /* any props passed into it *//>
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth // pull in all the state in the auth reducer
});

export default connect(mapStateToProps)(PrivateRoute);
