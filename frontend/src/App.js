import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';      // Halaman Register
import Login from './Login';            // Halaman Login
import BookList from './components/BookList';  // Daftar Buku
import AddBookForm from './components/AddBookForm';  // Form Menambah Buku
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <h1>Library Management System</h1>

        {/* Routing halaman */}
        <Switch>
          {/* Halaman Login */}
          <Route path="/login" component={Login} />

          {/* Halaman Register */}
          <Route path="/register" component={Register} />

          {/* Halaman Daftar Buku */}
          <Route path="/book-list" component={BookList} />

          {/* Halaman Form Tambah Buku */}
          <Route path="/add-book" component={AddBookForm} />

          {/* Halaman Utama (Redirect ke Book List jika belum login) */}
          <Route exact path="/" component={BookList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
