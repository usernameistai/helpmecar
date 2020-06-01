import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RegItem = ({
  regId,
  reg: { regFields, reg, _id, regplate, brakelightcentre, brakelightleft, brakelightright,
    lightleft, lightright, reglight, indbrokenoneside,
    indbrokenbothsides, indonesideon, exblacksmoke,
    exbluesmoke, exwhitesmoke, tyreflatleft, tyreflatright,
    superherodriver, gooddriver, roomforimprov }
}) => {
  return (
    <Fragment>
      {regFields
       ? <div className='regform-item'>
            <h3 className='form-text'>{regFields}</h3>
            <p>Unfortunately it appears your {regFields} is faulty</p>
          </div>
        : null
      }
    </Fragment>
  )
}

RegItem.propTypes = {
  reg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reg: state.reg
})

export default connect(mapStateToProps, {})(RegItem);
