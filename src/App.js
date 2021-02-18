import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Clients />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;