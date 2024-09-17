// routes/index.js
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Define the route for the home page
router.get('/', indexController.home);

module.exports = router;
