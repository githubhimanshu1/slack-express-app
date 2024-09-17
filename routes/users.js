// routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Define the route for the users page
router.get('/', usersController.getUsers);

module.exports = router;
