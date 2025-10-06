// src/components/AddBookForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/books', {
      title,
      author,
      publisher,
      stock
    })
    .then(response => {
      alert('Book added successfully!');
      setTitle('');
      setAuthor('');
      setPublisher('');
      setStock('');
    })
    .catch(error => {
      alert('Failed to add book');
      console.error(error);
    });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} placeholder="Publisher" required />
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
