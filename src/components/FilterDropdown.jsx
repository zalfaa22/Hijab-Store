import React, { useState, useEffect } from "react";
import "./css/filterdropdown.css";

const FilterDropdown = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  // const handleFilterChange = () => {
  //   onFilterChange({
  //     category: selectedCategory,
  //     price: selectedPrice,
  //     color: selectedColor,
  //   });
  // };

  
  useEffect(() => {
    handleFilterChange(); // Eksekusi filter setiap kali ada perubahan pada pilihan filter
  }, [selectedCategory, selectedPrice, selectedColor]);

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      price: selectedPrice,
      color: selectedColor,
    });
  };

  return (
    <div className="text-end mt-4">
      {/* <label htmlFor="category">Category:</label> */}
      
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="dropdown"
      >
        <option value="All">All Categories</option>
        <option value="scarf">Scarf</option>
        <option value="tops">Tops</option>
        <option value="dress">Dress</option>
        <option value="outerwear">Outerwear</option>
        <option value="produk terbaru">Produk Terbaru</option>
        {/* ... tambahkan opsi kategori lainnya */}
      </select>

      {/* <label htmlFor="price">Price:</label> */}
      <select
        id="price"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className="dropdown"
      >
        <option value="All">All Prices</option>
        <option value="50000-100000">Rp 50.000 - Rp 100.000</option>
        <option value="100000-150000">Rp 100.000 - Rp 150.000</option>
        <option value="150000-200000">Rp 150.000 - Rp 200.000</option>
        <option value="200000-250000">Rp 200.000 - Rp 250.000</option>
        {/* ... tambahkan opsi harga lainnya */}
      </select>

      {/* <label htmlFor="color">Color:</label>
      <select
        id="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="All">All</option>
        <option value="hazelnut" className="color-option">
            Hazelnut</option>
        <option value="silver grey">Silver Grey</option>
      </select> */}

      {/* <button onClick={handleFilterChange}>Apply Filter</button> */}
    </div>
  );
};

export default FilterDropdown;
