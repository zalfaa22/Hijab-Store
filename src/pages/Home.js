import React from "react";
import CardProduct from "../components/CardProduct";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#F2E3D5",
        paddingTop: "3rem",
      }}
    >
      
      <CardProduct /><div style={{marginBottom: "12rem"}}>
      <Cart/></div>
      <div style={{marginBottom: "12rem"}}>
      {/* <Cart2/> */}
      </div>
      {/* <Buy/> */}
      <Footer/>
    </div>
  );
}
