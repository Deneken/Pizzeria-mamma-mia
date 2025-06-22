function NavbarF() {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-md bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3 text-white">
          <p className="m-0 fw-bold">🍕 Pizzería Mamma Mia!</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuPrincipal">
          <div className="d-flex flex-column flex-md-row gap-2 align-items-start align-items-md-center ms-md-4 mt-3 mt-md-0">
            <button className="btn btn-outline-secondary text-white">
              🍕 Home
            </button>

            {/* Mostrar botones según si está logueado */}
            {token ? (
              <>
                <button className="btn btn-outline-secondary text-white">
                  🔓 Profile
                </button>
                <button className="btn btn-outline-secondary text-white">
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-secondary text-white">
                  🔐 Login
                </button>
                <button className="btn btn-outline-secondary text-white">
                  🔐 Register
                </button>
              </>
            )}
          </div>
        </div>

        <div className="d-none d-md-block">
          <button className="btn btn-outline-secondary text-white">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarF;
