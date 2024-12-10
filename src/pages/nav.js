import React from "react";
import "./nav.css"; // Archivo CSS para estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-title">
        <img src="/images/monky-logo.png" alt="Monky Brownies Logo" />
        
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Perfil</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="/src/pages/Cart">Carrito</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
