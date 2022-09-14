import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow py-2">
        <div className="container">
          <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
            COLLECTION
          </NavLink>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  className="nav-link text-black active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 text-white" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>

            <div className="buttons d-flex">
              <button className="btn">
                <NavLink to="/" className="btn btn-outline-light ms-2">
                  <i class="fa fa-sign-in px-2" aria-hidden="true"></i>Login
                </NavLink>
              </button>
            </div>

            <div className="buttons">
              <button className="btn">
                <NavLink to="/" className="btn btn-outline-light ms-2">
                  <i class="fa fa-user-plus px-2" aria-hidden="true"></i>
                  Register
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
