import React, { useState, useEffect } from "react";
import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import Testi from "./Testi";
import "./css/testi.css";

const TestimonialCarousel = () => {
  const [isPrevButtonActive, setIsPrevButtonActive] = useState(false);
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    import("../data/testi.json").then((data) => setTestimonials(data.default));
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
  return (
    <>
      <div className="testi w-100 min-vh-100 pt-5">
        {/* <Container> */}
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
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index} className="px-4 py-5 p-md-5">
              <Row className="">
                {[0, 1, 2].map((i) => (
                  <Col key={i} className="">
                    <Testi {...testimonial} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="button-container rounded-pill px-2 d-inline-block py-2 mt-5 mt-md-0 mb-5">
          <Button
            variant=""
            className={`panah rounded-circle border-0 ${
              isPrevButtonActive ? "active" : ""
            }`}
            onClick={goToPreviousSlide}
            style={{ width: "50px", height: "50px" }}
          >
            <img src="../assets/testi/kiri.svg" alt="" />
          </Button>
          <Button
            variant=""
            className={`ms-2 panah rounded-circle border-0 ${
              isNextButtonActive ? "active" : ""
            }`}
            onClick={goToNextSlide}
            style={{ width: "50px", height: "50px" }}
          >
            <img src="../assets/testi/kanan.svg" alt="" />
          </Button>
          </div>
          {/* </Container> */}
      </div>
    </>
  );
};

export default TestimonialCarousel;

// import React, { useState } from 'react';
// import { Carousel, Row, Col, Button } from 'react-bootstrap';

// const items = [
//   {
//     title: "Bainar Multicolour Dress",
//     stars: 4,
//     customerName: "Azrin Anbilyli",
//     materialDescription:
//       "Material: Premium Valerie interlock, bahan nya nyaman, jahitan nya rapi, model nya simple dan elegan.",
//     photo: "../assets/testi/orang.svg",
//   },
//   {
//     title: "Yasmin Multicolour Dress",
//     stars: 4,
//     customerName: "Azrin Anbilyli",
//     materialDescription:
//       "Material: Premium Valerie interlock, bahan nya nyaman, jahitan nya rapi, model nya simple dan elegan.",
//     photo: "../assets/testi/orang.svg",
//   },
//   // Tambahkan item lainnya sesuai kebutuhan
// ];

// const TestimonialCarousel = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   const goToPreviousSlide = () => {
//     setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//   };

//   const goToNextSlide = () => {
//     setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <>
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         {items.map((item, index) => (
//           <Carousel.Item key={index}>
//             <Row className="mt-4">
//               <Col className="">
//                 <div className="card-container p-3">
//                   <div className="photo-container">
//                     <img src={item.photo} alt="" className="w-100 img-fluid" />
//                   </div>
//                   <div className="first-description text-start mt-3">
//                     <p className="product-name mb-0 fs-6 text-capitalize">{item.title}</p>
//                     <div className="star d-flex mt-1">
//                       {[...Array(item.stars).keys()].map((star) => (
//                         <img key={star} src="../assets/testi/star-kuning.svg" alt="" className="me-2" />
//                       ))}
//                       {[...Array(5 - item.stars).keys()].map((star) => (
//                         <img key={star} src="../assets/testi/star-abu.svg" alt="" />
//                       ))}
//                     </div>
//                     <p className="customer-name fs-6 mt-1">by {item.customerName}</p>
//                   </div>
//                   <div className="second-description text-start fs-6 mt-4">
//                     <p className="fw-semibold">{item.materialDescription}</p>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//       <Button variant="secondary" className="mt-2" onClick={goToPreviousSlide}>
//         &lt;
//       </Button>
//       <Button variant="secondary" className="mt-2 ms-2" onClick={goToNextSlide}>
//         &gt;
//       </Button>
//     </>
//   );
// };

// export default TestimonialCarousel;
