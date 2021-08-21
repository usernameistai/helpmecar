import React, { Fragment, useEffect }from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/spinner';
// import RegItem from './RegItem';
import { connect } from 'react-redux';
import { getReg } from '../../actions/reg';

const ShowReg = ({ 
  getReg,
  reg: { _id, reg, loading, driver, regplate, regFields, brakelightcentre, brakelightleft, brakelightright,
    lightleft, lightright, reglight, indbrokenoneside,
    indbrokenbothsides, indonesideon, exblacksmoke,
    exbluesmoke, exwhitesmoke, tyreflatleft, tyreflatright,
    superherodriver, gooddriver, roomforimprov },
  match
  }) => {
  useEffect(() => {
    getReg(match.params.id);
  }, [getReg, match.params.id]); // should put reg in state

  // const {
  //   regplate, brakelightcentre, brakelightleft, brakelightright,
  //   lightleft, lightright, reglight, indbrokenoneside,
  //   indbrokenbothsides, indonesideon, exblacksmoke,
  //   exbluesmoke, exwhitesmoke, tyreflatleft, tyreflatright,
  //   driver.superherodriver, driver.gooddriver, driver.roomforimprov
  // } = reg;

  return (
    <Fragment>
    { loading || reg === null
      ? <Spinner />
      : <Fragment>
        <h1 className='large text-primary my-0 lan'>Fault Show</h1>
          <div className='form container-reg2'>
            
            <div className='form-group'>
              <h1 className='title text-primary'>Message for owner of {reg.regplate} </h1>
              <h3 className='form-text'>It appears the following may be wrong with your car:-</h3>
              <br />
              { reg.brakelightcentre 
                ? <div className='regform-item ri m-1'><p>Looks like your centre brake light is out</p></div> : null 
              }
              { reg.brakelightleft 
                ? <div className='regform-item ri m-1'><p>Looks like your left brake light is out</p></div> : null 
              }
              { reg.brakelightright 
                ? <div className='regform-item ri m-1'><p>Looks like your right brake light is out</p></div> : null 
              }
              { reg.lightleft 
                ? <div className='regform-item ri m-1'><p>Looks like your left rear light is out</p></div> : null 
              }
              { reg.lightright 
                ? <div className='regform-item ri m-1'><p>Looks like your right rear light is out</p></div> : null 
              }
              { reg.indbrokenoneside 
                ? <div className='regform-item ri m-1'><p>One of your indicators is flashing</p></div> : null 
              }
              { reg.indbrokenbothsides 
                ? <div className='regform-item ri m-1'><p>Both your hazard lights are permanently on</p></div> : null 
              }
              { reg.indonesideon 
                ? <div className='regform-item ri m-1'><p>One of your indicators is on continuously</p></div> : null 
              }
              { reg.exblacksmoke 
                ? <div className='regform-item ri m-1'><p>You have some black smoke coming from your exhaust</p></div> : null 
              }
              { reg.exbluesmoke 
                ? <div className='regform-item ri m-1'><p>You have some blue smoke coming from your exhaust</p></div> : null 
              }
              { reg.exwhitesmoke 
                ? <div className='regform-item ri m-1'><p>You have some white smoke coming from your exhaust</p></div> : null 
              }
              { reg.tyreflatleft 
                ? <div className='regform-item ri m-1'><p>A tyre on your left hand side is flat or needs pumping up</p></div> : null 
              }
              { reg.tyreflatright 
                ? <div className='regform-item ri m-1'><p>A tyre on your right hand side is flat or needs pumping up</p></div> : null 
              }
              
              <br />
              <h3 className='form-text'>People said the following about your driving:-</h3>
              <br />
              { reg.driver.superherodriver // reg.driver.
                ? <div className='regform-item ri m-1'><p> Super Hero Driver - (Drives Impeccably People in Awe of Said Skill) </p></div> : null 
              }
              { reg.driver.gooddriver // reg.driver.
                ? <div className='regform-item ri m-1'><p> Good Driver - (Drives Safely and Courteously) </p></div> : null 
              }
              { reg.driver.roomforimprov // reg.driver.
                ? <div className='regform-item ri m-1'><p> Room For Improvement - (Not entirely Concentrating, Not 100% Safe Driver) </p></div> : null 
              }
            </div>
            
            <Link to='/reg' className='btn btn-danger'>Go back home</Link>
          </div>
        </Fragment>
      }
    </Fragment>
    );
  };

ShowReg.propTypes = {
  getReg: PropTypes.func.isRequired,
  reg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reg: state.reg
});

export default connect(mapStateToProps, { getReg })(ShowReg);
