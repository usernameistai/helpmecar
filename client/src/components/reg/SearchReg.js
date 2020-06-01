import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReg } from '../../actions/reg';

const SearchReg = ({ 
  getReg,
  regId, 
  reg: { id, _id, reg, regplate }
}) => {
  useEffect(() => {
    getReg();
  }, [getReg]); // should put reg in state

  const [formData, setFormData] = useState({ regplate: '' });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // took out ...formData at start
  };

  const onSubmit = e => {
    e.preventDefault();
    getReg(regId, id); // changed from setFormData
    alert(`I hope your car ${formData.regplate} has no faults...`);
    setFormData('');
    window.location=`/reg-search/${formData.regplate}`; // could be regplate 
  };

  return (
    <Fragment>
      <div className='reg-img1'>
        <div className='container-reg3'>
          <div className='text-primary'>
            <h1>Search for the reg in question</h1>
          </div>
          <ul>
            <li>
              <form className='form' 
                onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                  <input 
                    className='my-1'
                    type='search' 
                    placeholder='Enter registration number'
                    name='regplate'
                    value={regplate}
                    id='search' // added this after for somthing for js to call
                    onChange={e => onChange(e)}
                    required
                  />
                  <div className='py-1'>
                    <input className='btn btn-primary mb-2' type='submit' value='Search'/>
                    <Link className='btn btn-danger mb-2' to='/reg'>Go Back</Link> 
                  </div> 
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
};

SearchReg.propTypes = {  
  reg: PropTypes.object.isRequired,
  getReg: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reg: state.reg,
  regplate: state.reg.regplate
});

export default connect(mapStateToProps, { getReg })(SearchReg);
