import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import { NavLink } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(product);
  const [loading, setLoading] = useState(false);
  let shop = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (shop) {
        setProduct(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        shop = false;
      };
    };
    getProducts();
  }, []);

  // loading
  const Loading = () => {
    return( 
    <>
    <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
      
        </div>
    </>
    );
  };

  // filter the product according to the category

  const filterProduct = (categories) => {
   const updatedList = product.filter((x) =>x.category === categories)
   setFilter(updatedList)

  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          
          <button className="btn btn-outline-dark me-2 " onClick={() => setFilter(product)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
            Men's Collection
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
            Women's Collection
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((item) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={item.id}>
                  <img
                    src={item.image}
                    className=""
                    alt={item.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{item.title}</h5>
                    <p className="card-text lead fw-bold">${item.price}</p>
                   
                   {/*  product full details will come here by id while pressing the button*/}

                    <NavLink to={`/products/${item.id}`} state={item} className="btn btn-primary">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        {/* // heading - products */}
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Products</h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
