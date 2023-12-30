const express = require('express');
const User = require('../Models/User');
const {validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const router = express.Router()

const JWT_SECRET = 'De@thIsInevit$ble';

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required

  router.post('/createuser',[
    body('name','Enter a valid Name').isLength({min: 3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Password must be atLeast 5 characters').isLength({min: 5}),

], async (req, res) => {
    let success = false;
    const result = validationResult(req);
  if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    try {
    let user = await User.findOne({email: req.body.email})
    if(user) {
        return res.status(400).json({success, error: "Sorry a user with this email already exist"})
    }

    const salt = await bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hashSync(req.body.password, salt);

        user = await User.create({
            name:req.body.name,
            password:secPass,
            email:req.body.email
        })
        const data = {
            user: {
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    success = true;
    res.json({success, authtoken})
}   catch(err) {
    console.error(err.message)
    res.status(500).send("Some Error Occured")}
  })

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required

  router.post('/login',[
    body('email','Enter a valid Email').isEmail(),
    body('password','Password cannot be empty').exists(),

], async (req, res) => {
    const result = validationResult(req);
    let success = false;
  if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    const {email, password} = req.body

    try {
        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({error: "Your email or password is incorrect"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare) {
            success= false
            return res.status(400).json({success, error: "Your email or password is incorrect"})
        }

        const data = {
            user: {
            id: user.id
        }}
        
        const authtoken = jwt.sign(data, JWT_SECRET)
        success = true;
        res.json({success, authtoken})
    } catch(err) {
        console.error(err.message)
        res.status(500).send("Internal Server Error Occured")}
})


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required

router.post('/getuser',fetchuser, async (req, res) => {

    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)

    } catch(err) {
        console.error(err.message)
        res.status(500).send("Internal Server Error Occured")}
})



module.exports = router;