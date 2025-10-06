// src/App.js
import React from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';

function App() {
  return (
    <div>
      <h1>Library Management System</h1>
      <AddBookForm />
      <BookList />
    </div>
  );
}

export default App;
