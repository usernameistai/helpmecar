import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getReg } from '../../actions/reg';
// import SearchReg from './SearchReg';


const Reg = ({ 
  reg:{ reg,  regplate },  
  profile, 
  auth,
  match 
}) => {

  return (
    <Fragment>
      <h1 className='large text-primary my-1'>HelpMe Car - Home</h1>
      <h2 className='lead'>What do we want to see here? More punnery like above?</h2>

      <ul className='reg'>
        <li className='form reg-item'>
          <h3 className='form-text my-1'>Search for Your Car</h3>
          <p>Follow the link to see if anyone has helped your car</p>
          <div className='my-1 reg-link'>
            <Link className='btn btn-success' to='/reg-search'>
              Regplate Search
            </Link>
          </div>
        </li>
        
        <li className='form reg-item'>
          <h3 className='form-text my-1'>Help Someone's Car</h3>
          <p>This way to help out a fellow humans car</p>
          <div className='my-1 reg-link'>
            <Link className='btn btn-primary' to='/reg-form'>
              Help Me
            </Link>
          </div>
        </li>
        
        <li className='form reg-item'>
          <h3 className='form-text my-1'> Information about the site</h3>
          <p>Information about rules and safe practices</p>
          <div className='my-1 reg-link'>
            <Link className='btn btn-light' to='/'>
              Back To The Beginning
            </Link>
          </div>
        </li>
      </ul> 
      <Fragment>
        <div className='reg-two bg-dark'>
          <h1 className='large my-2'>A little bit about our (my) site</h1>
          <Link className='btn btn-danger' to='/reg-rules'>Rules & Regulations</Link>
          <div className='reg-3'>
            <p>A link to a bit about the site? Who should be using it & rules</p>
            <p>i.e no drivers, only passengers, pedestraians and cyclsist
              as long as they've pulled over
            </p>
            <p>Should have a #ofhelps like with experieces and education</p>
          </div>
          <br />
          <Link className='btn btn-danger' to='/being-decent'>Why people should be helpful</Link>
          <div className='reg-3'>
            <p>Link to person dashboard to enter information</p>
          </div>
          <br />
          <Link className='btn btn-danger' to='/reg-search'>Search for your car</Link>
          <div className='reg-3'>
            <p>will have search function here hopefully, if(no regplate found) 
                redirect to regform
              else display reg and problems  show only items set to true
            </p>
          </div>
          <br />
          <Link className='btn btn-danger' to='/car-stats'>Car stats about dangerous vehicles or something</Link>
          <div className='reg-3'>
           <p>Maybe some stats about broken car parts in the uk </p>
          </div>
          <br />
          <Link className='btn btn-danger' to='/'>Landing page</Link>
          <div className='reg-3'>
           <p>Apparently red butons are the shiit</p>
          </div>
        </div>
      </Fragment>
    </Fragment>
  )
}

Reg.propTypes = {
  reg: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reg: state.reg,
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {})(Reg); // connect(mapStateToProps, {  })(Reg);
