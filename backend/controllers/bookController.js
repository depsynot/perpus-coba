const db = require('../models/db');

// GET BOOKS
const getBooks = (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Database error', error: err });
    } else {
      res.status(200).json(results);
    }
  });
};

// POST BOOK
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

// UPDATE BOOKS BY ID
const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, publisher, stock } = req.body;

  const query = 'UPDATE books SET title = ?, author = ?, publisher = ?, stock = ? WHERE id = ?';
  db.query(query, [title, author, publisher, stock, id], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Failed to update book', error: err });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ message: 'Book updated successfully' });
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    }
  });
};

// DELETED BOOKS BY ID
const deleteBook = (req, res) => {
  const { id } = req.params; 
  const query = 'DELETE FROM books WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Failed to delete book', error: err });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ message: 'Book deleted successfully' });
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    }
  });
};

module.exports = { getBooks, addBook, updateBook, deleteBook };
