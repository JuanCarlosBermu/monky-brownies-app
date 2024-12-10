import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} MXN
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
