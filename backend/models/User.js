const db = require('./db'); // Menghubungkan ke database MySQL
const bcrypt = require('bcryptjs');

// Fungsi untuk menambah pengguna
const addUser = (name, email, password, callback) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return callback(err);
    }

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        return callback(err);
      }
      callback(null, result);
    });
  });
};

// Fungsi untuk mencocokkan password pengguna
const comparePassword = (email, password, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err || results.length === 0) {
      return callback(err || new Error('User not found'));
    }
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return callback(err || new Error('Invalid password'));
      }
      callback(null, user);
    });
  });
};

module.exports = {
  addUser,
  comparePassword,
};
