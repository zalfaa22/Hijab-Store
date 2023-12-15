import React, { useState, useEffect } from "react";
import data from "../data/product.json";
import "./css/cardproduct.css";

export default function CardProduct() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <>
    
    <div className="wrap">
        <div className="tittle fs-1 fw-semibold pb-3">Zada Kheir Product</div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-5">
        {jsonData.map((item, index) => (
          <div key={index} className="group">
            <div className="col">
              <div className="custom-card rounded-3  ">
                <img
                  src={item.image}
                  className="card-img-top px-3 pt-3 hover-opacity"
                  alt="..."
                />
                <div className="card-body px-3 py-3">
                  <h1 className="category text-start  fw-bold">
                    {item.category}
                  </h1>
                  <h5 className="card-tittle text-start fs-6 fw-medium">
                    {item.name}
                  </h5>
                  <p className="card-text text-start fs-6 fw-bold">
                    {item.price}
                  </p>
                  <div class="d-flex">
                    <button class="button col-8 py-2  ms-auto flex-grow-1 d-flex justify-content-center align-items-start fw-bold rounded-3">
                      Add to cart
                    </button>
                    <button class="button  p-2 ms-3 rounded-3" style={{width: "40px", height: "40px"}}></button>
                  </div>

                  {/* <div class=" row text-center justify-content-center">
    <div class=" bg-danger-subtle  shadow col-7 py-2 d-flex justify-content-center align-items-start me-4">Add to cart
        <p class="text-dark fs-6 fw-bold  ">Add to Cart</p>
    </div>
    <div class="bg-danger-subtle rounded-3 shadow col-2"></div>
</div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="button-view text-center pb-5">
        <button class="button button-view py-3 px-5 fs-6 fw-bold text-white">View All Product</button>
    </div>
    </div>
    </>
  );
}
