import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarF from "./components/NavbarF";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarF />
      <Home />
      <Footer />
    </>
  );
}

export default App;
