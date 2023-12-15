import React from "react";
import CardProduct from "../components/CardProduct";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Testi from "../components/Testi";
import Carousel from "../components/Carousel";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Navbar />
    {/* Hero Section/ Start */}
      <Hero />
    <div
      style={{
        backgroundColor: "#F2E3D5",
        paddingTop: "3rem",
      }}
    >
      
      <CardProduct />
      
      {/* About us Start */}
      <section id="about" className="">
      <About />
      </section>

      <div style={{marginBottom: "12rem"}}>
      <Cart/></div>

      <section className="">
        <Carousel />
      </section>

      <div style={{marginBottom: "12rem"}}>
      </div>
      <Footer/>
    </div>
  );
}
