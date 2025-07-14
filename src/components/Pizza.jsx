import React, { useEffect, useState } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al cargar la pizza:", error));
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={pizza.img}
              className="img-fluid rounded-start"
              alt={pizza.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">🍕 {pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>

              <h5>Ingredientes:</h5>
              <ul>
                {pizza.ingredients.map((ing, i) => (
                  <li key={i}>🍕 {ing}</li>
                ))}
              </ul>

              <p className="card-text mt-3">
                <strong>Precio: ${pizza.price}</strong>
              </p>

              <button className="btn btn-outline-success">
                Añadir al carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
