const express = require('express');
const router = express.Router();
const { getBooks, addBook } = require('../controllers/bookController');

// Mendapatkan semua buku
router.get('/', getBooks);

// Menambahkan buku baru
router.post('/', addBook);

module.exports = router;
