import { useCart } from "../context/CardContext";


function Card() {
  const { cart, increase, decrease, getTotal, removeFromCart } = useCart();

  return (
    <div className="container mt-4">
      <h5>Detalles del pedido:</h5>

      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex align-items-center mb-3">
          <img
            src={pizza.img}
            alt={pizza.name}
            width={50}
            height={50}
            style={{ borderRadius: 8 }}
          />
          <p className="mb-0 ms-2" style={{ width: 100 }}>
            {pizza.name}
          </p>
          <p className="mb-0 ms-2">${pizza.price.toLocaleString()}</p>

          <div className="d-flex align-items-center ms-3">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(pizza.id)}
            >
              −
            </button>
            <span className="mx-2">{pizza.cantidad}</span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
            <button
              className="btn btn-outline-warning btn-sm ms-2"
              onClick={() => removeFromCart(pizza.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <h5 className="mt-4">Total: ${getTotal().toLocaleString()}</h5>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
}

export default Card;
