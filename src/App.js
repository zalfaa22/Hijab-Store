import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login'
import Daftar from './pages/SignUp'
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart/:id" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
