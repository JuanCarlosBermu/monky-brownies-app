import React from "react";
import "./Home.css"; // Archivo CSS para estilos
import{ useCart } from "./CartContext.js"; // importar el contexto del carrito

const Home = () => {
  const {addToCart} = useCart(); //Obtener la funcion para agregar al carrito
  const brownies = [
    { id: 1, name: "Brownie Clásico", price: 25, image: "/images/brownie-clasico.png", description: "El clásico brownie con un toque de chocolate." },
    { id: 2, name: "Brownie de Nutella", price: 30, image: "/images/brownie-de-nutella.jpg", description: "Brownie cubierto con deliciosa Nutella." },
    { id: 3, name: "Brownie de Chocolate Blanco", price: 35, image: "/images/brownie-white-choco.png", description: "Brownie suave con chispas de chocolate blanco." },
  ];

  const handleBuyNow = (productName) => {
    alert(`¡Has agregado "${productName}" al carrito!`);
  };

  return (
    <div className="home">
      <h1 className="home-title">¡Bienvenidos a Monky Brownies!</h1>
      <div className="brownie-list">
        {brownies.map((brownie) => (
          <div key={brownie.id} className="brownie-card">
            <img src={brownie.image} alt={brownie.name} className="brownie-image" />
            <h2>{brownie.name}</h2>
            <p>{brownie.description}</p>
            <p className="price">Precio: ${brownie.price}</p>
            <button 
            className="buy-button" 
            onClick={() => addToCart(brownie)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
