import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavbarF from "./components/NavbarF";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Card from "./pages/Card";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CardContext";
import { UserProvider, useUser } from "./context/UserContext";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { token } = useUser();
    if (!token) return <Navigate to="/login" replace />;
    return children;
  };

  const PublicRoute = ({ children }) => {
    const { token } = useUser();
    if (token) return <Navigate to="/" replace />;
    return children;
  };

  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <NavbarF />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route path="/card" element={<Card />} />
            <Route path="/pizza/:id" element={<Pizza />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
