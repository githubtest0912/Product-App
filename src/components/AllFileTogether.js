import React from "react";


import Home from "./Home";
import Navbar from "./Navbar";
import Product from "./New project/Products";
import ProductDetails from "./New project/Product";
import Notfound from "./Notfound";
// import ProductDetails from "./ProductDetails";
import { Route, Routes } from "react-router-dom";

const AllFileTogether = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
       
        <Route path="/product" element={<Product />} />
      
        <Route path="/product/:id" element ={ProductDetails} />
       
        <Route path="*" element={<Notfound />} />
      </Routes>
      
      
    </div>
  );
};

export default AllFileTogether;
