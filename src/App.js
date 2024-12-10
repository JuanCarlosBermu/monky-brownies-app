import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './pages/nav';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar>
        <link to="/">Inicio</link>
        <link to="/src/pages/Cart">Carrito</link>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/pages/Cart" element={<Cart />} />
      </Routes>
      <Home />
    </div>
    </Router>
  );
};

export default App;

