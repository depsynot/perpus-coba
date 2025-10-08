const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const router = express.Router();

// Route untuk Register
router.post(
  '/register',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  authController.register
);

// Route untuk Login
router.post(
  '/login',
  [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  authController.login
);

module.exports = router;
