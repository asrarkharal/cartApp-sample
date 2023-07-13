import React from "react";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
