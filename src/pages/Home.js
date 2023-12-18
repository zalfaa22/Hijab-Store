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
import Grisel from "../components/grisel";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div
        style={{
          backgroundColor: "#F2E3D5",
          paddingTop: "3rem",
        }}
      > */}
      {/* Hero Section/ Start */}
      <section>
        <Hero />
      </section>

     
        <CardProduct />

        {/* About us Start */}
        <section id="about" className="">
          <About />
        </section>

        {/* <section className="mt-5 pt-5">
          <Grisel />
        </section> */}

        <section style={{ marginBottom: "12rem" }}>
          <Cart />
        </section>

        <section className="">
          <Carousel />
        </section>

        <section style={{ marginBottom: "12rem" }}></section>
        <Footer />
      {/* </div> */}
    </>
  );
}
