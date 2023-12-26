import React, { useEffect, useState, useRef } from "react";
import "./css/cart.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/Header";
import ColorChoice from "../components/ColorChoice";
// import Type from "./cart/Type";
import SizeChoice from "../components/SizeChoice";
import data from "../data/product.json"
import { useParams } from 'react-router-dom';

export default function Cart() {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  console.log('ID:', id);
  const item = data.find(item => item.id === parseInt(id));
  const [activeTypeIndex, setActiveTypeIndex] = useState(0); // Initialize to null
  const imageContainerRef = useRef(null);

  const handleTypeClick = (index) => {
    setActiveTypeIndex(index);
    scrollToImage(index);
  };

  const scrollToImage = (index) => {
    const targetImage = imageContainerRef.current.querySelector(`[data-index="${index}"]`);
    if (targetImage) {
      targetImage.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <>
    <Navbar/>
      <div class="cartdetail">
        <div class="container">
          <div class="row d-flex justify-content-between ">
            <div class="col-lg-2 col-md-3 col-12">

            <div className="images d-none d-md-block d-lg-block">
            {item.photo.map((photoPath, index) => (
          <button
            key={index}
            className={`buttonphoto ${index === activeTypeIndex ? "active " : ""}`}
            onClick={() => handleTypeClick(index)}
          >
            
            <img
              className="img-fluid mb-3"
              src={photoPath}
              alt={`Type ${index + 1}`}
            />
          </button>
        ))}
      </div>

              {/* <Type/> */}
            </div>
            <div class="col-lg-5 col-md-9">
            <div class="image-container" ref={imageContainerRef}>
            {item.photo.map((photoPath, index) => (
              <img
              key={index}
              data-index={index}
                class="img-fluid mb-0 mb-md-4 mb-lg-4 me-4 me-md-0 me-lg-0"
                src={photoPath}
              />
              ))}
              </div>
              {/* <div class="row justify-content-between mt-5">
                <ColorChoice />
              </div> */}
            </div>
            <div
              class="col-lg-5 col-md-12 text-start content"
              style={{ color: "#774C29" }}
            >
              <h1 className="fs-4 fw-medium text-start pt-5 pt-lg-0">
                Zada Kheir
              </h1>
              <h1 className="fs-4 fw-bold text-uppercase text-start pt-3">
                {item.name}
              </h1>
              <h1 className="fs-5 fw-medium text-start pt-3">Description</h1>
              <p className="fw-medium text-start pt-3 pb-3 text" style={{color: "#956138"}}>
                Material: Premium Valerie interlock, bahan nya nyaman, jahitan
                nya rapi, model nya simple dan elegan.. tetep cantik dan
                menawan.
              </p>
              <div
                class=" d-flex justify-content-between align-items-center  py-2 "
                style={{ backgroundColor: "#FFCDA6" }}
              >
                <div class="col-md-5 col-5 fw-bold text-start ps-3">
                  {item.displayprice}
                </div>
                <div class="col-md-2 col-2">
                  <img class="img-fluid" src="../assets/Cart/line.png" />
                </div>
                <div class="col-md-5 col-5 text-start ">
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#F2E3D5" }}
                  ></i>
                </div>
              </div>

              <h6 className="pt-5 fw-bold pb-2" style={{ color: "#774C29" }}>
                Select Color
              </h6>
              <div class="row justify-content-between ">
                <ColorChoice />
              </div>

              <h6 className="pt-5 fw-bold pb-2" style={{ color: "#774C29" }}>
                Select Size
              </h6>
              {/* <div
                class="row size d-flex"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/Cart/size1.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/Cart/size2.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/Cart/size3.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/Cart/size4.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/Cart/size5.svg" />
                </div>
              </div> */}

              <SizeChoice/>

              {/* <h6 className="pt-5 fw-bold" style={{ color: "#774C29" }}>
                Select Hijab Size
              </h6> */}

              <div class="mt-4 d-flex align-items-center gap-3">
                <button
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty <= 1}
                  className="btn-minus rounded justify-content-center align-items-center"
                >
                  <i class="bi bi-dash"></i>
                </button>
                <h1 className="fs-4 mt-2 mx-2" style={{ color: "#5A381C" }}>
                  {qty}
                </h1>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="btn-plus rounded justify-content-center align-items-center"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>

              <div class="d-flex mt-4">
                <button class="button button-add col-8 py-3  ms-auto flex-grow-1 d-flex justify-content-center align-items-start fw-bold rounded-3 text-white">
                  Add to cart
                  <img
                    className="img-fluid ms-2"
                    src="../assets/Cart/cart-icon.svg"
                  ></img>
                </button>
                <button
                  class="button button-add p-2 ms-3 rounded-3"
                  style={{ width: "53px", height: "53px" }}
                >
                  <img
                    className="img-fluid "
                    src="../assets/Cart/fav-icon.svg"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pt-5 text-center">
        <div
          className="btn px-2 rounded-5"
          style={{ backgroundColor: "#FFCDA6" }}
        >
          <button
            class="btn  custom-btn rounded-circle"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            <i class="bi bi-arrow bi-arrow-left"></i>
          </button>
          <button
            class="btn custom-btn rounded-circle "
            data-toggle="button"
            aria-pressed="true"
            autocomplete="off"
          >
            <i class="bi bi-arrow bi-arrow-right"></i>
          </button>
        </div>
      </div> */}
    </>
  );
}


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import data from "../data/product.json";

// export default function CartPage() {
//     const location = useLocation();
//     const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     const itemIdFromState = location.state ? location.state.selecteditem.id : null;

    // Find the selected item from the data array based on ID
//     const selectedItemFromData = data.find((item) => item.id === itemIdFromState);

//     setSelectedItem(selectedItemFromData);
//   }, [location.state]);

//   return (
//     <div>
//       <h1 className="text-dark">Cart Page</h1>
//       <div>
        {/* Display the selected item information */}
        // {selectedItem && (
        //   <div className="text-dark">
        //     <h2>Selected item Details:</h2>
        //     <p>ID: {selectedItem.id}</p>
        //     <p>Name: {selectedItem.name}</p>
        //     <p>Price: {selectedItem.price}</p>
            {/* Add other information as needed */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



