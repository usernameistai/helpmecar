const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Reg = require('../../models/Reg');
// const Regplate = require('../../models/Regplate');

// @route   GET api/reg
// @desc    get all reges
// @access  Public
// router.get('/', async (req, res) => { // this might have to go below or might call this for any page
//   try {
//     const reges = await Reg.find().populate('reg');
//     res.json(reges);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @route   GET api/reg/:reg_id
// @desc    Get registration plate and errors via reg plate id
// @access  Public
router.get('/reg-search/:reg_id', async (req, res) => {
  try {
    // let regArray = [];
    const regArr = [
      'regplate', 'brakelightcentre', 'brakelightleft', 'brakelightright',
    'lightleft', 'lightright', 'reglight', 'indbrokenoneside', 'indbrokenbothsides', 
    'indonesideon', 'inbothsideson', 'exblacksmoke', 'exbluesmoke', 'exwhitesmoke',
    'tyreflatleft', 'tyreflatright', 'superherodriver', 'gooddriver', 'roomforimprov'
    ];

    const reg = await Reg
      .findOne({ regplate: req.params.reg_id }).populate('reg',  regArr ); // req.params.reg_id / { reg: req.query._id }
    // reg.map(doc => {
    //   regArray.push(doc);
    // });

    if(!reg) {
      return res.status(404).json({ msg: 'Reg not found' });
    }

    res.json(reg);
    console.log(mongoose.Types.ObjectId + 'smell smell smelly');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/reg
// @desc    Test route
// @access  Public
router.post('/',
[ check('regplate', 'Regplate is required').not().isEmpty()],
 async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { regplate, brakelightcentre, brakelightleft, brakelightright,
    lightleft, lightright, reglight, indbrokenoneside, indbrokenbothsides,
    indonesideon, inbothsideson, exblacksmoke, exbluesmoke, exwhitesmoke,
    tyreflatleft, tyreflatright, superherodriver, gooddriver, roomforimprov
  } = req.body;

  // Build faulty car object
  const regFields = {};
  // regFields.regplate = req.regplate.id;
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
    let reg = await Reg.findOne({ regplate: req.params.id }); // was reg: req.query._id

    if(reg) {
      reg = await Reg.findOneAndUpdate(
        // { regplate: req.regplate.id },
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

// @route    DELETE reg
// @desc     Delete profile, user & posts
// @access   Private
// router.delete('/', async (req, res) => {
//   try {
//     // Remove profile
//     await Reg.findOneAndRemove({ reg: req.reg.id });
//     // // Remove user
//     // await User.findOneAndRemove({ _id: req.user.id });
//     res.json({ msg: 'Registration removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;