const express = require('express');
const router = express.Router();
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');

// GET ALL BOOKS
router.get('/', getBooks);

// POST BOOKS
router.post('/', addBook);

// UPDATE BOOKS BY ID
router.put('/:id', updateBook);

// DELETED BOOKS BY ID
router.delete('/:id', deleteBook);

module.exports = router;
