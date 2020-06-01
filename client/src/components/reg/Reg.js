import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getReg } from '../../actions/reg';
// import SearchReg from './SearchReg';


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
            <p>See if anyone has helped your car, maybe you've helped someone else already</p>
            <div className='reg-link'>
              <Link className='btn btn-success' to='/reg-search'>
                Regplate Search
              </Link>
            </div>
          </li>
          
          <li className='form reg-item' id='help'>
            <h3 className='form-text my-1 '>Help Someone's Car</h3>
            <p>This way to help out a fellow humans car.. maybe someone has already helped you</p>
            <div className='reg-link'>
              <Link className='btn btn-primary' to='/reg-form'>
                Help Me
              </Link>
            </div>
          </li>
          
          <li className='form reg-item' id='other'>
            <h3 className='form-text my-1'> Site Information</h3>
            <p>Information, Rules & Guidance. Photos of human decency and kindness</p>
            <div className='reg-link'>
              <Link className='btn btn-light' to='/reg-rules'>
                Guidance
              </Link>
            </div>
          </li>
        </ul> 
      </div>
      <div >
        <div className='reg-two bg-dark'>
          <h1 className='large my-2' id='site'>A little bit about our (my) site</h1>
          <div id='carrules'>
            <div>
              <Link className='btn btn-danger' to='/reg-rules'>Rules & Regulations</Link>
              <div className='reg-3'>
                <p>Who should be using it & rules</p>
                <p>Other modes of transport e.g. pogo sticks, enough carrier pigeons etc.</p>
              </div>
            </div>
            <br />
            <div>
              <Link className='btn btn-danger' to='/reg-help'>Why people should be helpful</Link>
              <div className='reg-3'>
                <p>Why be helpful?</p>
                <p>Don't sign up! Leave my database alone. Go on, bugger off..</p>
              </div>
            </div>
            <br />
            <div>
              <Link className='btn btn-danger' to='/reg-search'>Search for your car</Link>
              <div className='reg-3'>
                <p>This way to search for your car, or a family member or friend's</p>
              </div>
            </div>
            <br />
            <div id='carsafety'>
              <Link className='btn btn-danger' to='/reg-safety'>Car stats about accients 2018</Link>
              <div className='reg-3'>
              <p>Maybe some stats about broken car parts in the uk </p>
              <p>Could copy the table over from website (crediting it of course)</p>
              </div>
            </div>
            <br />
            <div>
              <Link className='btn btn-danger' to='/'>Landing page</Link>
              <div className='reg-3'>
              <p>Apparently red buttons are pretty hip... back to the start</p>
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
