const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/book.Routes');

dotenv.config();

const app = express();
app.use(express.json());


app.use('api/books');

const PORT = process.env.PORT || 50000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
}); 