import React from "react";

//import { NavLink } from 'react-router-dom';

import { useState, useEffect } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    const API_URL = "https://fakestoreapi.com/products";
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
      <div className="row">
        {product.map((data) => (
          <div className="col-md-3 animated fadeIn" key={data.id}>
            <div className="card">
              <div className="card-body">
                <div className="avatar">
                  <img src={data.image} className="card-img-top" alt="" />
                </div>
                {/* // card title */}

                <h6 className="card-title">{data.title}</h6>
                {/* <p className="card-title">{data.description}</p> */}
                <h6 className="card-title">{data.category}</h6>
                {/* <h6 className="card-title">{data.rating.rate}</h6>
                <h6 className="card-title">{data.rating.count}</h6> */}

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
