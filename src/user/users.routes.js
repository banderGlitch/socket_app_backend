const express = require('express');
const user_controller = require('./user.controller.js');
const router = express.Router();

// SignUp api we have!
router.post("/signup", user_controller.create_user);
// retrive api we have! 
router.get('/get_users',user_controller.get_users);
// Verify user Otp 
router.post('/otpVerify', user_controller.otp_verify);

module.exports = router;
