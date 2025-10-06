const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',  // Pastikan host dan port database sesuai
  user: 'root',  // Sesuaikan dengan username database kamu
  password: '',  // Password database
  database: 'library_db'  // Nama database yang digunakan
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
