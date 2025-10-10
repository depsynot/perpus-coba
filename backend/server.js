const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes'); 
const db = require ('./models/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');


dotenv.config();  

const app = express();
app.use(express.json());  
app.use(cors());


// ROUTING
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
