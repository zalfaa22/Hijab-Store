import React, { useState, useEffect } from "react";
import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import Testi from "./Testi";
import "./css/testi.css";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPrevButtonActive, setIsPrevButtonActive] = useState(false);
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);

  const goToPreviousSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsPrevButtonActive(true);
    setIsNextButtonActive(false);
  };

  const goToNextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsPrevButtonActive(false);
    setIsNextButtonActive(true);
  };

  useEffect(() => {
    import("../data/testi.json").then((data) => setTestimonials(data.default));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const itemsPerSlide = windowWidth < 576 ? 1 : 3;

  return (
    <div className="testi w-100 pt-5">
    <h1 className="px-4 title text-uppercase fw-bold fs-1">
      LET CUSTOMER SPEAK FOR US
    </h1>
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      indicators={false}
      interval={null}
    >
      {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex} className="px-4 py-5 p-md-5">
          <Row className="">
            {[...Array(itemsPerSlide)].map((_, cardIndex) => {
              const dataIndex = slideIndex * itemsPerSlide + cardIndex;
              return dataIndex < testimonials.length ? (
                <Col key={dataIndex}>
                  <Testi {...testimonials[dataIndex]} />
                </Col>
              ) : null;
            })}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="pt-1">
        <div className="btn px-2 rounded-5" style={{ backgroundColor: "#FFCDA6" }}>
        <button
              class="btn  custom-btn rounded-circle"
              onClick={goToPreviousSlide}
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
            >
              <i class="bi bi-arrow bi-arrow-left"></i>
            </button>
            <button
              class="btn custom-btn rounded-circle"
              onClick={goToNextSlide}
              data-toggle="button"
              aria-pressed="true"
              autocomplete="off"
            >
              <i class="bi bi-arrow bi-arrow-right"></i>
            </button>
      </div>
    </div>
  </div>
  );
};

export default TestimonialCarousel;
