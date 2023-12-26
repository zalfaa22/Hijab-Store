import React from "react";
import CardProduct from "../components/CardProduct";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
      <div
        style={{
          backgroundColor: "#F2E3D5",
          paddingTop: "6rem",
        }}
      >
        <section id="product" className="">
          <CardProduct displayAllProducts={false}/>
        </section>

        <section id="about" className="">
          <About />
        </section>

        <section id="cart" className="">
        <Cart />
        </section>

        <section className="mt-5">
          <Carousel />
        </section>

        <Footer />
      </div>
    </>
  );
}
