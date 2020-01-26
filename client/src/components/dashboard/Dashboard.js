import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({ 
  getCurrentProfile,
  deleteAccount,
  auth: { user }, 
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? ( 
      <Spinner />
    ) : ( 
      <Fragment>
        <h1 className='large text-primary'>This is your Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-car-alt'></i>{' '}
          Welcome Helper { user && user.name }
        </p>
        {profile !== null ? ( 
          <Fragment>
            <DashboardActions />
            <Experience experience={profile.experience} key={profile.experience._id}/>
            <Education education={profile.education} key={profile.education._id}/>

            <div className="my-2">
              <button className="btn btn-danger" onClick={() => deleteAccount()}>
                <i className="fas fa-user-minus"></i> Delete the account then
              </button>
            </div>
          </Fragment>
        ) : ( 
          <Fragment>
              <p>Need to add to your profile amigo, share your helpful ways</p>
              <Link to='/create-profile' className='btn btn-primary my-1'> Add to profile</Link>
          </Fragment>
        )}
      </Fragment>
    );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
