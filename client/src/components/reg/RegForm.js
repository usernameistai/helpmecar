import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReg } from '../../actions/reg';

// added in regId
const RegForm = ({ addReg, reg, regId }) => {
  const [formData, setFormData] = useState({
    regplate: '', brakelightcentre: false, brakelightleft: false, brakelightright: false,
    lightleft: false, lightright: false, reglight: false, indbrokenoneside: false,
    indbrokenbothsides: false, indonesideon: false, exblacksmoke: false,
    exbluesmoke: false, exwhitesmoke: false, tyreflatleft: false, tyreflatright: false,
    superherodriver: false, gooddriver: false, roomforimprov: false
  });

  const [checkDisabled, toggleDisabled] = useState(false);

  const { regplate, brakelightcentre, brakelightleft, brakelightright,
  lightleft, lightright, reglight, indbrokenoneside,
  indbrokenbothsides, indonesideon, exblacksmoke,
  exbluesmoke, exwhitesmoke, tyreflatleft, tyreflatright,
  superherodriver, gooddriver, roomforimprov } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addReg(formData);
    alert(`Thank you for helping ${regplate}`);
    setFormData(''); // added this might have to include every option for reg.regplate, reg.brakelightcentre2x
    window.location=`/reg-search/${regId}`;
  };

  return (
    <Fragment>
      <div className='container-reg'>
        <div className='form'>
          <div className='title text-primary'><h1>Help Your Fellow Humans Out</h1></div>
          <form className='form' onSubmit={e => onSubmit(e)} action='/reg'>
            <div className='form-group'>
              <input 
                type='text'
                placeholder='Enter registration number'
                name='regplate'
                value={regplate}
                onChange={e => onChange(e)}
                required
              />
              <small className='form-text'>
                Please enter registration mumber, public or private
              </small>
              <br />
              <div className='regform-item'>
                <h3 className='form-text'>Brake Lights Condition</h3>
                <div>
                  <label><input
                    type='checkbox' 
                    name='brakelightcentre' 
                    checked={brakelightcentre}
                    value={brakelightcentre} 
                    onChange={() => {
                      setFormData({ ...formData, brakelightcentre: !brakelightcentre});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Central Brake Light {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='brakelightleft' 
                    checked={brakelightleft} 
                    value={brakelightleft} 
                    onChange={() => {
                      setFormData({ ...formData, brakelightleft: !brakelightleft});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Left Brake Light {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='brakelightright' 
                    checked={brakelightright} 
                    value={brakelightright} 
                    onChange={() => {
                      setFormData({ ...formData, brakelightright: !brakelightright});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Right Brake Light {''}</label>
                </div>
              </div>
              <br />
              <div className='regform-item'>
                <h3 className='form-text'>Rear Car Lights Condition</h3>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='lightleft' 
                    checked={lightleft} 
                    value={lightleft} 
                    onChange={() => {
                      setFormData({ ...formData, lightleft: !lightleft});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Left Rear Light {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='lightright' 
                    checked={lightright} 
                    value={lightright} 
                    onChange={() => {
                      setFormData({ ...formData, lightright: !lightright});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Right Rear Light {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='reglight' 
                    checked={reglight} 
                    value={reglight} 
                    onChange={() => {
                      setFormData({ ...formData, reglight: !reglight});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Registration Number Light {''}</label>
                </div>
              </div>
              <br />
              <div className='regform-item'>
                <h3 className='form-text'>Indicator / Hazard Lights Condition</h3>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='indbrokenoneside' 
                    checked={indbrokenoneside} 
                    value={indbrokenoneside} 
                    onChange={() => {
                      setFormData({ ...formData, indbrokenoneside: !indbrokenoneside});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Indicator Broken/Flashing On One Side {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='indbrokenbothsides' 
                    checked={indbrokenbothsides} 
                    value={indbrokenbothsides} 
                    onChange={() => {
                      setFormData({ ...formData, indbrokenbothsides: !indbrokenbothsides});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Indicators Broken On Both Sides {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='indonesideon' 
                    checked={indonesideon} 
                    value={indonesideon} 
                    onChange={() => {
                      setFormData({ ...formData, indonesideon: !indonesideon});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Indicator Is On One Side {''}</label>
                </div>
              </div>
              <br />
              <div className='regform-item'>
                <h3 className='form-text'>Exhaust Smoke Standing Out?</h3>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='exblacksmoke' 
                    checked={exblacksmoke} 
                    value={exblacksmoke} 
                    onChange={() => {
                      setFormData({ ...formData, exblacksmoke: !exblacksmoke});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Black Exhaust Smoke {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='exbluesmoke' 
                    checked={exbluesmoke}
                    value={exbluesmoke} 
                    onChange={() => {
                      setFormData({ ...formData, exbluesmoke: !exbluesmoke});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Blue Exhaust Smoke {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='exwhitesmoke' 
                    checked={exwhitesmoke} 
                    value={exwhitesmoke} 
                    onChange={() => {
                      setFormData({ ...formData, exwhitesmoke: !exwhitesmoke});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} White Exhaust Smoke {''}</label>
                </div>
              </div>
              <br />
              <div className='regform-item'>
                <h3 className='form-text'>Tyre Condition</h3>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='tyreflatleft' 
                    checked={tyreflatleft} 
                    value={tyreflatleft} 
                    onChange={() => {
                      setFormData({ ...formData, tyreflatleft: !tyreflatleft});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Flat Tyre Left Side{''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='tyreflatright' 
                    checked={tyreflatright} 
                    value={tyreflatright} 
                    onChange={() => {
                      setFormData({ ...formData, tyreflatright: !tyreflatright});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Flat Tyre Right Side {''}</label>
                </div>
              </div>
              <br />
              <div className='regform-item'>
                <h3 className='form-text'>Driver Capability</h3>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='superherodriver' 
                    checked={superherodriver} 
                    value={superherodriver} 
                    onChange={() => {
                      setFormData({ ...formData, superherodriver: !superherodriver});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Super Hero Driver - (Drives Impeccably People in Awe of Said Skill) {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='gooddriver' 
                    checked={gooddriver} 
                    value={gooddriver} 
                    onChange={() => {
                      setFormData({ ...formData, gooddriver: !gooddriver});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Good Driver - (Drives Safely and Courteously) {''}</label>
                </div>
                <div>
                  <label><input 
                    type='checkbox' 
                    name='roomforimprov' 
                    checked={roomforimprov}
                    value={roomforimprov} 
                    onChange={() => {
                      setFormData({ ...formData, roomforimprov: !roomforimprov});
                      toggleDisabled(!checkDisabled);
                    }} 
                  />{''} Room For Improvement - (Not entirely Concentrating, Not 100% Safe Driver)  {''}</label>
                </div>
              </div>
              <br />
            </div>
            <div className='form-group'>
              <input 
              type='submit' 
              value=' Help This Car ' 
              className='btn btn-success'
              />
              <Link className='btn btn-light my-1' to='/reg'>
                Go Back
              </Link>
            </div> 
            <h3 className='form-text'>And that's it, you've helped someone out</h3>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

RegForm.propTypes = {
  addReg: PropTypes.func.isRequired,
  reg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reg: state.reg
});

export default connect(mapStateToProps, { addReg })(withRouter(RegForm));
