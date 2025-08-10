import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useCart } from "../context/CardContext";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al cargar las pizzas:", error));
  }, []);

  return (
    <>
      <header className="text-center">
        <Header />
      </header>
      <main className="container">
        <section className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                <div className="card-body">
                  <h5>{pizza.name}</h5>
                  <p>${pizza.price.toLocaleString()}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(pizza)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
