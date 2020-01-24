import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
// import ProfileTop from './ProfileTop';
// import ProfileAbout from './ProfileAbout';
// import ProfileExperience from './ProfileExperience';
// import ProfileEducation from './ProfileEducation';
// import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id); // instead of props.match.params.id match id in url
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading 
        ? <Spinner></Spinner> 
        : <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back to profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit profile
              </Link>
            )}
        </Fragment> 
      }
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
// You need mapStateToProps when you have to access some properties of your global state.

export default connect(mapStateToProps, { getProfileById })(Profile);
