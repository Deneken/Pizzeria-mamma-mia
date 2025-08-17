import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { useUser } from "../context/UserContext";

function NavbarF() {
  const { getTotal } = useCart();
  const { token, logout } = useUser();

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
            <Link to="/" className="btn btn-outline-secondary text-white">
              🍕 Home
            </Link>

            {token ? (
              <>
                <Link
                  to="/profile"
                  className="btn btn-outline-secondary text-white"
                >
                  🔓 Profile
                </Link>
                <button
                  onClick={logout}
                  className="btn btn-outline-secondary text-white"
                >
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-secondary text-white"
                >
                  🔐 Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline-secondary text-white"
                >
                  🔐 Register
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="d-none d-md-block">
          <Link to="/cart" className="btn btn-outline-secondary text-white">
            🛒 Total: ${getTotal().toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarF;
