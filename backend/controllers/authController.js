const User = require('../models/User'); // Menggunakan model User yang baru dengan MySQL
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

// Fungsi Register
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Menambah pengguna ke database
    User.addUser(name, email, password, (err, result) => {
      if (err) {
        return res.status(500).json({ msg: 'Failed to register user' });
      }

      // Membuat JWT token
      const payload = {
        user: {
          id: result.insertId,
        },
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Fungsi Login
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Verifikasi email dan password
    User.comparePassword(email, password, (err, user) => {
      if (err) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Membuat JWT token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
