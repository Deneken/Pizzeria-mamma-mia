import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarF from "./components/NavbarF";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Card from "./components/Card";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <NavbarF />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Pizza />
      {/* <Card /> */}
      <Footer />
    </>
  );
}

export default App;
