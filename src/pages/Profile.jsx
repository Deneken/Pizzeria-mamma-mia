export default function Profile() {
  const email = "deneken3109@gmail.com";

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <button onClick={() => alert("Sesión cerrada (simulado)")}>
        Cerrar sesión
      </button>
    </div>
  );
}
