import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);
  
  const fetchData = () => {
    const API_URL = "https://fakestoreapi.com/products?limit=12";
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw Error("Did not received expected data");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container color">
      <div className="d-flex justify-content-center">
        <h3 className="diplay-6 ">Our Products</h3>
        
      </div>
     
      <div className="row mt-5">
       
        {product.map((data) => (
            <div className="col-md-3 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <NavLink to ='/products'><img src={data.image} className="card-img-top" alt="" /></NavLink>
                  </div>
                  {/* // card title */}

                  <h6 className="card-title">{data.title}</h6>

                  <h6 className="card-title">{data.category}</h6>

                  {/* rate with star */}

                  <p className="lead fw-bolder">
                    {data.rating && data.rating.rate}
                    <i className="fa fa-star star-color"></i>
                  </p>

                  <h4 className="card-text">${data.price}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
