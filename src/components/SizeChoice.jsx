import React, { useState } from 'react';
import "./css/size.css";

export default function SizeChoice() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleDivClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  const getDivStyle = (index) => ({
    border: `1.5px solid ${index === clickedIndex ? "#FFB880" : "#774C29"}`, // Change #000 to the default border color
    // ... other styles
  });
  
  const getDivClasses = (index) =>
    `col mx-md-4 mx-lg-1 mx-xl-2 size ${
      index === clickedIndex ? "bg-custom shadow text-white" : "box"
    }`;
  
//   const getDivClasses = (index) =>
//     `col mx-md-4 mx-lg-1 mx-xl-2 size ${index === clickedIndex ? "bg-custom shadow text-white" : "box border border-dark border-2 border-custom"}`;

  const sizes = ["Xs", "S", "M", "L", "XL"];

  return (
    <div
      className="row size d-flex align-items-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {sizes.map((size, index) => (
        <div
          key={index}
          className={getDivClasses(index)}
          style={getDivStyle(index)}
          onClick={() => handleDivClick(index)}
        >
          <p className="text-center align-items-center fs-5 fw-bold mt-3">{size}</p>
        </div>
      ))}
    </div>
  );
}
