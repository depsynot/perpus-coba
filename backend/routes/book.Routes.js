const express = require('express');
const router = express.Router();
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');

// Mendapatkan semua buku
router.get('/', getBooks);

// Menambahkan buku baru
router.post('/', addBook);

// Mengupdate buku berdasarkan ID
router.put('/:id', updateBook);

// Menghapus buku berdasarkan ID
router.delete('/:id', deleteBook);

module.exports = router;
