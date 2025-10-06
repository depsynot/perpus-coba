const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');

// Menggunakan dotenv untuk mengelola variabel lingkungan
dotenv.config();

const app = express();
app.use(express.json()); // Untuk parsing JSON body dari request

// Routing untuk buku
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
