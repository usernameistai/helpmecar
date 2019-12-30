const express = require('express');
const router = express.Router();

const Reg = require('../../models/Reg');

// @route   GET api/reg
// @desc    get all reges
// @access  Public
router.get('/', async (req, res) => { // this might have to go below or might call this for any page
  try {
    const reges = await Reg.find().populate('reg');
    res.json(reges);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/reg/user/:user_id
// @desc    Get registration plate and errors via reg plate id
// @access  Public
router.get('/:reg_id', async (req, res) => {
  try {
    const reg = await Reg.findById(req.params.reg_id);

    res.json(reg);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/reg
// @desc    Test route
// @access  Public
router.post('/', async (req, res) => {

  const { regplate, brakelightcentre, brakelightleft, brakelightright,
    lightleft, lightright, reglight, indbrokenoneside, indbrokenbothsides,
    indonesideon, inbothsideson, exblacksmoke, exbluesmoke, exwhitesmoke,
    tyreflatleft, tyreflatright, superherodriver, gooddriver, roomforimprov
  } = req.body;
  // Build faulty car object
  const regFields = {};
  if(regplate) regFields.regplate = regplate;
  if(brakelightcentre) regFields.brakelightcentre = brakelightcentre;
  if(brakelightleft) regFields.brakelightleft = brakelightleft;
  if(brakelightright) regFields.brakelightright = brakelightright;
  if(lightleft) regFields.lightleft = lightleft;
  if(lightright) regFields.lightright = lightright;
  if(reglight) regFields.reglight = reglight;
  if(indbrokenoneside) regFields.indbrokenoneside = indbrokenoneside;
  if(indbrokenbothsides) regFields.indbrokenbothsides = indbrokenbothsides;
  if(indonesideon) regFields.indonesideon = indonesideon;
  if(inbothsideson) regFields.inbothsideson = inbothsideson;
  if(exblacksmoke) regFields.exblacksmoke = exblacksmoke;
  if(exbluesmoke) regFields.exbluesmoke = exbluesmoke;
  if(exwhitesmoke) regFields.exwhitesmoke = exwhitesmoke;
  if(tyreflatleft) regFields.tyreflatleft = tyreflatleft;
  if(tyreflatright) regFields.tyreflatright = tyreflatright;
  // Build driver object
  regFields.driver = {};
  if(superherodriver) regFields.driver.superherodriver =  superherodriver;
  if(gooddriver) regFields.driver.gooddriver = gooddriver;
  if(roomforimprov) regFields.driver.roomforimprov =  roomforimprov;

  try {
    let reg = await Reg.findOne({ reg: regplate });

    if(reg) {
      reg = await Reg.findOneAndUpdate(
        { $set: regFields },
        { new: true }
      );
      return res.json(reg);
    }
    // Create Reg if not found
    reg = new Reg(regFields);
    await reg.save();

    res.json(reg);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;