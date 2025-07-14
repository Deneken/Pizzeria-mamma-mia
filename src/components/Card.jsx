import React, { useState } from "react";
import { pizzaCart } from "./pizzas"; // Asegúrate de que el path sea correcto
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  // Aumentar cantidad
  const aumentar = (id) => {
    const actualizado = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
    );
    setCart(actualizado);
  };

  // Disminuir cantidad o eliminar
  const disminuir = (id) => {
    const actualizado = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
      )
      .filter((pizza) => pizza.cantidad > 0); // elimina si cantidad es 0
    setCart(actualizado);
  };

  // Calcular total
  const total = cart.reduce(
    (acc, pizza) => acc + pizza.precio * pizza.cantidad,
    0
  );

  return (
    <div className="container mt-4">
      <h5>Detalles del pedido:</h5>

      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex align-items-center mb-3">
          <img
            src={pizza.imagen}
            alt={pizza.nombre}
            width={50}
            height={50}
            style={{ borderRadius: 8 }}
          />
          <p className="mb-0 ms-2" style={{ width: 100 }}>
            {pizza.nombre}
          </p>
          <p className="mb-0 ms-2">${pizza.precio.toLocaleString()}</p>

          <div className="d-flex align-items-center ms-3">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => disminuir(pizza.id)}
            >
              −
            </button>
            <span className="mx-2">{pizza.cantidad}</span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => aumentar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h5 className="mt-4">Total: ${total.toLocaleString()}</h5>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
}

export default Cart;
