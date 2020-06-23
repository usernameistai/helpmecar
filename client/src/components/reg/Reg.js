import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Reg = ({ 
  reg:{ reg,  regplate }
}) => {

  return (
    <Fragment>
      <h1 className='large text-primary my-0'>HelpMe Car - Home</h1>
      <h2 className='lead'>A way to help fellow humans and potentially why...</h2>

      <div className='reg-img2'>
        <ul className='reg'>
          <li className='form reg-item' id='search'>
            <h3 className='form-text my-1'>Search for Your Car</h3>
            <p>Please enter a registration number to see if anyone has information about your car</p>
            <div className='reg-link'>
              <Link className='btn btn-success' to='/reg-search'>
                Regplate Search
              </Link>
            </div>
          </li>
          
          <li className='form reg-item' id='help'>
            <h3 className='form-text my-1 '>Help Someone's Car</h3>
            <p>This way to help out a fellow humans car, enter some basic info about their car</p>
            <div className='reg-link'>
              <Link className='btn btn-primary' to='/reg-form'>
                Help Me
              </Link>
            </div>
          </li>
          
          <li className='form reg-item' id='other'>
            <h3 className='form-text my-1'> Site Information</h3>
            <p>Important Information, Rules & Guidance about how to use this site safely</p>
            <div className='reg-link'>
              <Link className='btn btn-light' to='/reg-rules'>
                Guidance
              </Link>
            </div>
          </li>
        </ul> 
      </div>
      <div >
        <div className='reg-two bg-combine'>
          <h1 className='large my-2' id='site'>A little bit about our site</h1>
          <div id='carrules'>
            <div>
              <Link className='btn btn-danger filter' to='/reg-rules'>Rules & Regulations</Link>
              <div className='reg-3'>
                <p>Who should be using it & rules</p>
                <p>Please do not use whilst driving (you shouldn't be reading this)</p>
                <p>It is illegal to use your phone whilst driving</p>
              </div>
            </div>
            <br />
            <div>
              <Link className='btn btn-danger filter' to='/reg-help'>Why people should be helpful</Link>
              <div className='reg-3'>
                <p>Why be helpful?</p>
                <p>Don't need to sign up to help someone</p>
                <p>Be helpful </p>
              </div>
            </div>
            <br />
            <div>
              <Link className='btn btn-danger filter' to='/reg-search'>Search for your car</Link>
              <div className='reg-3'>
                <p>This way to search for your car, or a family member or friend's</p>
              </div>
            </div>
            <br />
            <div id='carsafety'>
              <Link className='btn btn-danger filter' to='/reg-safety'>Car stats about accidents 2018</Link>
              <div className='reg-3'>
              <a rel='noopener noreferrer' target='_blank' href='https://www.gov.uk/government/collections/road-accidents-and-safety-statistics' ><p>Accident reports from The Department of Transport Statistics </p></a>
              <p>RAS50002 & RAS20002 DOT Statistics</p>
              </div>
            </div>
            <br />
            <div>
              <Link className='btn btn-danger filter' to='/'>Landing page</Link>
              <div className='reg-3'>
              <p>Want to start from the beginning </p>
              </div>
            </div>
          </div>
          <div id='carimg'>
            <div className='reg-four'> <h1>Maybe you'd prefer a combine harvester?</h1></div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

Reg.propTypes = {
  reg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reg: state.reg
});

export default connect(mapStateToProps, {})(Reg); // connect(mapStateToProps, {  })(Reg);
