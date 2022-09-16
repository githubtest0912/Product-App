import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setItem(await response.json());
      // after response loading should be false
      setLoading(false);
    };
    getProduct();
  }, []);

  // loading

  const Loading = () => {
    return <>Loading....</>;
  };

  // show product

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img src={item.image} alt={item.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="text-uppercase text-black-50">{item.category}</h4>
          <h1 className="display-5">{item.title}</h1>
          <p className="lead fw-bolder">
            Rating {item.rating && item.rating.rate}
            <i className="fa fa-star star-color"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${item.price}</h3>
          <p className="lead">{item.description}</p>
          <button className="btn btn-outline-primary">Add to Cart</button>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
