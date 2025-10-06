const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');  // Pastikan path ke routes sudah benar

dotenv.config();  // Memuat variabel lingkungan dari file .env

const app = express();
app.use(express.json());  // Parsing JSON body dari request

// Routing untuk buku
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
