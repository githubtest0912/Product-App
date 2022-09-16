import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h4>COLLECTION</h4>
              </div>

              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link p-0 text-white">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/products" className="nav-link p-0 text-white">
                      Products
                    </NavLink>
                  </li>
                  
                  <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link p-0 text-white">
                      FAQs
                    </NavLink>
                  </li>
                 
                </ul>
              </div>
              {/* // subscribe */}
              <div className="col-4 offset-1">
                <form>
                  <h5>Visit to our Shop</h5>
                  <p>Monthly digest of whats new and exciting from us</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="email" className="visually-hidden">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr />

            <div className="d-flex justify-content-between pt-4 mt-4 brder-top">
              <p>@ 2022 Company, Inc. All rights reserved. </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-light" href='https://www.facebook.com'>
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                </li>

                <li className="ms-3">
                  <a className="link-light" href='https://www.instagram.com/'>
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </li>

                <li className="ms-3">
                  <a className="link-light" href='https://www.twitter.com'>
                    <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
