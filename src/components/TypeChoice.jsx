import React, { useEffect, useState, useRef } from "react";
import "./css/cart.css";

export default function TypeChoice() {
  const [isActiveType, setisActiveType] = useState(true);

  const handleTypeClick = () => {
    setisActiveType(false);
  };

  return (
    <>
      <div className="images d-none d-md-block d-lg-block">
        <button
          className={`buttonphoto ${isActiveType ? "active" : ""}`}
          onClick={handleTypeClick}
        >
          <img
            class="img-fluid mb-3 "
            src="assets/Cart/image1.png"
            alt="Image 1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </button>
        <button
          className={`buttonphoto ${isActiveType ? "" : ""}`}
          onClick={handleTypeClick}
        >
          <img
            class="img-fluid mb-3"
            src="assets/Cart/image1.png"
            alt="Image 2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </button>
        <button
          className={`buttonphoto ${isActiveType ? "" : ""}`}
          onClick={handleTypeClick}
        >
          <img
            class="img-fluid mb-3"
            src="assets/Cart/image1.png"
            alt="Image 3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </button>
        <button
          className={`buttonphoto ${isActiveType ? "" : ""}`}
          onClick={handleTypeClick}
        >
          <img
            class="img-fluid mb-3"
            src="assets/Cart/image1.png"
            alt="Image 4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </button>
      </div>
    </>
  );
}
