import React, { useEffect, useState, useRef } from "react";
import "./css/cart.css";

export default function Color() {
  const [isActive, setIsActive] = useState(true);

  const handleColorClick = () => {
    setIsActive(false);
  };

  return (
    <>
      <div class="col color" data-aos="fade-right" data-aos-duration="500">
        <button
          className={`buttonimg ${isActive ? "" : ""}`}
          onClick={handleColorClick}
        >
          <img class="img-fluid " src="assets/Cart/color1.svg" alt="Color 1" />
        </button>
      </div>
      <div
        class="col color"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="150"
      >
        <button
          className={`buttonimg ${isActive ? "active" : ""}`}
          onClick={handleColorClick}
        >
          <img class="img-fluid" src="assets/Cart/color2.svg" />
        </button>
      </div>
      <div
        class="col color"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <button
          className={`buttonimg ${isActive ? "" : ""}`}
          onClick={handleColorClick}
        >
          <img class="img-fluid" src="assets/Cart/color3.svg" />
        </button>
      </div>
      <div
        class="col color"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="450"
      >
        <button
          className={`buttonimg ${isActive ? "" : ""}`}
          onClick={handleColorClick}
        >
          <img class="img-fluid" src="assets/Cart/color4.svg" />
        </button>
      </div>
      <div
        class="col color"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="600"
      >
        <button
          className={`buttonimg ${isActive ? "" : ""}`}
          onClick={handleColorClick}
        >
          <img class="img-fluid" src="assets/Cart/color5.svg" />
        </button>
      </div>
    </>
  );
}
