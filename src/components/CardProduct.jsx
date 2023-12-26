import React, { useState, useEffect } from "react";
import data from "../data/product.json";
import FilterDropdown from "./FilterDropdown";
import { Link, useLocation } from "react-router-dom";
import "./css/cardproduct.css";

export default function CardProduct({ displayAllProducts }) {
  const [jsonData, setJsonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(true); // Tambahkan state showFilterDropdown
  const location = useLocation();

  useEffect(() => {
    setJsonData(data);
    setFilteredData(data);
  }, []);

  const applyFilter = ({ category, price, color }) => {
    let filteredProducts = jsonData;

    if (category !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === category
      );
    }

    if (color !== "All") {
      filteredProducts = filteredProducts.filter((item) =>
        Array.isArray(item.color)
          ? item.color.includes(color)
          : item.color === color
      );
    }

    if (price !== "All") {
      const [minPrice, maxPrice] = price.split("-").map(Number);
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }
    // Implementasi filter berdasarkan harga dan warna

    setFilteredData(filteredProducts);
  };

  const productsToShow = displayAllProducts
    ? filteredData
    : jsonData.slice(0, 4);

  // Set showFilterDropdown ke false jika displayAllProducts adalah false
  useEffect(() => {
    setShowFilterDropdown(displayAllProducts);
  }, [displayAllProducts]);
  
  useEffect(() => {
    // Set jsonData to all products sorted in descending order
    if (location.pathname === "/product") {
    setJsonData([...data].sort((a, b) => b.id - a.id));
    setFilteredData([...data].sort((a, b) => b.id - a.id));}}, []);

  return (
    <>
      <div className="wrap">
        <div className="tittle fs-1 fw-semibold pb-3 text-center">
          Zada Kheir Product
        </div>
        {showFilterDropdown && <FilterDropdown onFilterChange={applyFilter} />}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-5">
          {productsToShow.map((item, index) => (
            <div
              key={index}
              className="group"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="col">
                <div
                  className="custom-card rounded-3"
                  style={{
                    transition: "transform 0.3s",
                    transformOrigin: "center",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
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
                      {item.displayprice}
                    </p>
                    <div className="d-flex">
                      {/* <button class="button col-8 py-2  ms-auto flex-grow-1 d-flex justify-content-center align-items-start fw-bold rounded-3">
                        Add to cart
                      </button> */}
                      <Link
  to={{
    pathname: `/cart/${item.id}`,
    state: { selecteditem: item },
  }}
  className="button col-8 py-2  ms-auto flex-grow-1 d-flex justify-content-center align-items-start fw-bold rounded-3"
  style={{ textDecoration: "none" }}
>
  Add to cart
</Link>
                      <button
                        className="button  p-2 ms-3 rounded-3"
                        style={{ width: "40px", height: "40px" }}
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!displayAllProducts && (
          <div className="button-view text-center pb-5">
            <a href="/product">
              <button className="button button-add button-view py-3 px-5 fs-6 fw-bold text-white">
                View All Product
              </button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
