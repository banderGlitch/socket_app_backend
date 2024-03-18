const express = require('express');
const controller = require('./user.controller.js')
const router = express.Router();

router.post("/signup", controller.create_user);
router.get("/users", controller.get_users);
router.post("/verifyOtp", controller.otp_verify);

module.exports = router

