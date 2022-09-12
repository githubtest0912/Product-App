import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-black active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/product">
                 Product
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/productdetails">
                 Product Details
                </NavLink>
              </li> */}
              </ul>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
             PRODUCT
            </NavLink>

            <form className="d-flex justify-content-end" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>

                      </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
