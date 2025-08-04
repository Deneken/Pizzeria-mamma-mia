import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Vuelve al inicio o cierra la pestana</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
