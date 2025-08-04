import React from "react";

const Card = ({ name, price, ingredientes, img }) => {
  return (
    <div className="col-12 col-md-4 mt-4">
      <div className="card h-100 w-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title">Pizza {name}</h5>

          <hr />

          <p className="card-text mb-1">
            <strong>Ingredientes:</strong>
          </p>

          <ul className="list-unstyled text-muted">
            {ingredientes.map((ing, i) => (
              <li key={i}>🍕 {ing}</li>
            ))}
          </ul>

          <p className="card-text mt-3">
            <strong>Precio: ${price}</strong>
          </p>
          <hr />
        </div>

        <div className="card-footer d-flex justify-content-around bg-white border-0">
          <button
            id="btnVerMas"
            type="button"
            className="btn btn-outline-secondary text-black"
          >
            Ver más 👀
          </button>
          <button
            id="btnAnadir"
            type="button"
            className="btn btn-outline-secondary text-black"
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
