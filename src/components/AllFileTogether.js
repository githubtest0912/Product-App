import React from "react";


import Home from "./Home";
import Navbar from "./Navbar";
import Product from "./Product";
// import ProductDetails from "./ProductDetails";
import { Route, Routes } from "react-router-dom";
const AllFileTogether = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/product" element={<Product />} />
        {/* <Route path="/productdetails" element={<ProductDetails />} /> */}
       
      </Routes>
      
      
    </div>
  );
};

export default AllFileTogether;
