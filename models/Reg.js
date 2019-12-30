const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegSchema = new Schema({
  regplate: { // does this need a separate model
    type: String,
    required: true
  },
  brakelightcentre: {
    type: Boolean,
    default: false
  },
  brakelightleft: {
    type: Boolean,
    default: false
  },
  brakelightright: {
    type: Boolean,
    default: false
  },
  lightleft: {
    type: Boolean,
    default: false
  },
  lightright: {
    type: Boolean,
    default: false
  },
  reglight: {
    type: Boolean,
    default: false
  },
  indbrokenoneside: {
    type: Boolean,
    default: false
  },
  indbrokenbothsides: {
    type: Boolean,
    default: false
  },
  indonesideon: {
    type: Boolean,
    default: false
  },
  indbothsideson: {
    type: Boolean,
    default: false
  },
  exblacksmoke: {
    type: Boolean,
    default: false
  },
  exbluesmoke: {
    type: Boolean,
    default: false
  },
  exwhitesmoke: {
    type: Boolean,
    default: false
  },
  tyreflatleft: {
    type: Boolean,
    default: false
  },
  tyreflatright: {
    type: Boolean,
    default: false
  },
  driver: {
    superherodriver: {
      type: Boolean,
      default: false
    },
    gooddriver: {
      type: Boolean,
      default: false
    },
    roomforimprov: {
      type: Boolean,
      default: false
    }
  }
});

module.exports = Reg = mongoose.model('reg', RegSchema);