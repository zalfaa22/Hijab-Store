import React from "react";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Testi from "../components/Testi";
import Carousel from "../components/Carousel";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section/ Start */}
      <Hero />
      {/* Hero Section Finish */}

      {/* Card Section Start
      Card Section Finish */}

      {/* About us Start */}
      <section id="about" className="">
      <About />
      </section>
      {/* About us Finish */}

      {/* Cart Start
      Cart Finish */}

      {/* Testi Start */}
      <section className="">
      {/* <Testi /> */}
      </section>
      {/* Testi Finish */}

      <section className="">
        <Carousel />
      </section>

      <section className="mt-5">
        <h1>aaa</h1>
      </section>

    </>
  );
}
