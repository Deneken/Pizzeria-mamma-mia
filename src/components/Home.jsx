import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]);

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
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredientes={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
