import React, { Fragment, useEffect }from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/spinner';
// import ShowRegItem from './ShowRegItem';
import { connect } from 'react-redux';
import { getReg } from '../../actions/reg';

const ShowReg = ({ 
  getReg,
  reg: { _id, reg, loading, regplate, brakelightcentre, brakelightleft, brakelightright,
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
  //   superherodriver, gooddriver, roomforimprov
  // } = reg;

  return (
    <Fragment>
    { loading || reg === null
      ? <Spinner />
      : <Fragment>
          <Link to='/reg' className='btn btn-danger'>Go back home</Link>
          <h1 className='large-text'>We have a message for you {regplate} </h1>
          <p>It appears the following may be wrong with your car</p>
          { reg.brakelightcentre === true ? <p>Looks like your centre brake light is out</p> : null }
          { reg.brakelightleft === true ? <p>Looks like your left brake light is out</p> : null }
          { reg.brakelightright === true ? <p>Looks like your right brake light is out</p> : null }
          { reg.lightleft === true ? <p>Looks like your left rear light is out</p> : null }
          { reg.lightright === true ? <p>Looks like your right rear light is out</p> : null }
          { reg.indbrokenoneside === true ? <p>One of your indicators is flashing</p> : null }
          { reg.indbrokenbothsides === true ? <p>Both your hazard lights are permanently on</p> : null }
          { reg.indonesideon === true ? <p>One of your indicators is on continuously</p> : null }
          { reg.exblacksmoke === true ? <p>You have some black smoke coming from your exhaust</p> : null }
          { reg.exbluesmoke === true ? <p>You have some blue smoke coming from your exhaust</p> : null }
          { reg.exwhitesmoke === true ? <p>You have some white smoke coming from your exhaust</p> : null }
          { reg.tyreflatleft === true ? <p>A tyre on your left hand side is flat or needs pumping up</p> : null }
          { reg.tyreflatright === true ? <p>A tyre on your right hand side is flat or needs pumping up</p> : null }
          { reg.driver.superherodriver === true ? <p> Super Hero Driver - (Drives Impeccably People in Awe of Said Skill) </p> : null }
          { reg.driver.gooddriver === true ? <p> Good Driver - (Drives Safely and Courteously) </p> : null }
          { reg.driver.roomforimprov === true ? <p> Room For Improvement - (Not entirely Concentrating, Not 100% Safe Driver) </p> : null } 
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
