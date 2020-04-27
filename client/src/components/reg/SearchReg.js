import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ShowReg from './ShowReg';
import { connect } from 'react-redux';
import { getReg } from '../../actions/reg';

const SearchReg = ({ 
  getReg,
  regId, 
  reg: { id, _id, reg, regplate } ,
  match
}) => {
  useEffect(() => {
    getReg();
  }, [getReg]); // should put reg in state

  const [formData, setFormData] = useState({ regplate: '' });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // took out ...formData at start
  }

  // const {regplate } = formData;

  const onSubmit = e => {
    e.preventDefault();
    getReg(regId, id); // changed from setFormData
    alert(`I hope your car ${formData.regplate} has no faults...`);
    setFormData('');
    window.location=`/reg-search/${formData.regplate}`; // could be regplate 
  };

  // const { regplate } = formData;

  return (
    <Fragment>
      <div className='container-reg'>
        <div className='form'>
          <div className='bg-primary p'><h1>Search for the reg in question</h1></div>
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
                <input className='btn' type='submit' value='Search'/>
              </div>
            </form>
          </div>
        <Link className='btn btn-danger' to='/reg'>Go Back</Link>
      </div>
      {/* <div>
        <ShowReg regId={reg._id} reg={reg} />
      </div> */}
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
