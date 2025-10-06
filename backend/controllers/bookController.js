const db = require('../models/db');

// Mendapatkan semua buku
const getBooks = (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Database error', error: err });
    } else {
      res.status(200).json(results);
    }
  });
};

// Menambahkan buku baru
const addBook = (req, res) => {
  const { title, author, publisher, stock } = req.body;
  const query = 'INSERT INTO books (title, author, publisher, stock) VALUES (?, ?, ?, ?)';
  db.query(query, [title, author, publisher, stock], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Failed to add book', error: err });
    } else {
      res.status(201).json({ message: 'Book added successfully' });
    }
  });
};

module.exports = { getBooks, addBook };
