import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function SearchAndFilter() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // search
  const [q, setQ] = useState("");
  const [searchParam] = useState(["category", "title"]);
  // filter
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.category == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <h3 className="diplay-6 ">Our Products</h3>
        </div>
        <div className=" d-flex row">
          <div className="md-col-6 py-5">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
         
          <div className="select md-col-6 flex-end">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter products by categories"
            >
              <option value="All">Filter All</option>
              <option value="men's clothing">men's Clothing</option>
              <option value="women's clothing">women's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>

        <div className="row mt-5">
          {/* // search product by title */}
          {search(data).map((item) => (
            <div className="col-md-3 animated fadeIn" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img src={item.image} className="card-img-top" alt="" />
                  </div>
                  {/* // card title */}

                  <h6 className="card-title">{item.title}</h6>

                  <h6 className="card-title">{item.category}</h6>

                  {/* rate with star */}

                  <p className="lead fw-bolder">
                    {item.rating && item.rating.rate}
                    <i className="fa fa-star star-color"></i>
                  </p>

                  <h4 className="card-text">${item.price}</h4>

                  <NavLink
                    to={`/products/${item.id}`}
                    state={item}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default SearchAndFilter;
