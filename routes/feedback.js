// express
const express = require("express");
const router = express.Router();
// middleware
// const auth = require('../middleware/auth');
// mongo
// const User = require('../models/User');
// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /homepage
// @desc     Landing page
// @access   Public
router.get("/", async (req, res) => {
  try {
    res.json("feedback");
  } catch (err) {
    res.status(500).send(err + " Server error feedback");
  }
});

module.exports = router;
