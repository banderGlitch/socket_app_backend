const express = require('express');
const user_controller = require('./user.controller.js');
const router = express.Router();

// SignUp api we have!
router.post("/signup", user_controller.create_user);
// retrive api we have! 
router.get('/get_users',user_controller.get_users);

module.exports = router;
