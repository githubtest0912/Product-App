import React from "react";


import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products";
import Product from './Product'
import Notfound from "./Notfound";
// import ProductDetails from "./ProductDetails";
import { Route, Routes } from "react-router-dom";

const AllFileTogether = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
       
        <Route path="/products" element={<Products />} />
      
        <Route path="/products/:id" element ={<Product />} />
       
        <Route path="*" element={<Notfound />} />
      </Routes>
      
      
    </div>
  );
};

export default AllFileTogether;
