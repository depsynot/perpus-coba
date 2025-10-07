const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes'); 
const db = require ('./models/db');

dotenv.config();  

const app = express();
app.use(express.json());  

// ROUTING
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
