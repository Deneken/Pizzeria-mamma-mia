import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext"; 

const Card = ({ id, name, price, ingredientes, img }) => {
  const { token } = useUser();

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

        <div className="card-footer d-flex flex-column gap-2 bg-white border-0">
          <div className="d-flex justify-content-around">
            <Link
              to={`/pizza/${id}`}
              className="btn btn-outline-secondary text-black"
            >
              Ver más 👀
            </Link>

            <button
              id="btnAnadir"
              type="button"
              className="btn btn-outline-secondary text-black"
            >
              Añadir 🛒
            </button>
          </div>

          <button
            className="btn btn-success mt-2"
            disabled={!token} 
          >
            Pagar
          </button>
          {!token && (
            <p className="text-danger mt-1">Debes iniciar sesión para pagar</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
