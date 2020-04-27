import React from 'react'
import PropTypes from 'prop-types'

const ShowRegItem = ({
  regId,
  reg: { profileFields, reg, _id, regplate, brakelightcentre, brakelightleft, brakelightright,
    lightleft, lightright, reglight, indbrokenoneside,
    indbrokenbothsides, indonesideon, exblacksmoke,
    exbluesmoke, exwhitesmoke, tyreflatleft, tyreflatright,
    superherodriver, gooddriver, roomforimprov }
}) => {
  return (
    <div>
      <div>
        
      </div>
      
    </div>
  )
}

ShowRegItem.propTypes = {
  reg: PropTypes.object.isRequired
}

export default ShowRegItem;
