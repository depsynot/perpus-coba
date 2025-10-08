// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </li>
        <li>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
        </li>
        <li>
          <Link to="/book-list" style={{ color: 'white', textDecoration: 'none' }}>Book List</Link>
        </li>
        <li>
          <Link to="/add-book" style={{ color: 'white', textDecoration: 'none' }}>Add Book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
