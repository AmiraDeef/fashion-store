import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import payment from "../assets/Frame142.png";

export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <div className="container ">
        <div className="row g-4">

          <div className="col-lg-3 col-md-6 pt-2 ">
            <Link to="/" className="text-decoration-none">
            <img
              src={logo}
              alt="Logo"
              width="170"
              height="74"
              className="p-3"
            />
            </Link>

            <p className="text-secondary">
              <i className="fa-solid fa-location-dot"></i>{" "}
              29 SE 2nd Ave, Miami <br />
              Florida 33131, United States
            </p>

            <p className="text-secondary">
              <i className="fa-solid fa-envelope"></i>{" "}
              info@example.com
            </p>

            <h5 className="fw-bold">(+92) 3942 7879</h5>
          </div>

          
          <div className="col-lg-2 col-md-6 pt-4">
            <h5 className="mb-3">SHOPPING</h5>
            <ul className="list-unstyled">
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Wishlist</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Shop by Brand</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Offers</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Track Order</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Size Guide</a></li>
            </ul>
          </div>

        
          <div className="col-lg-2 col-md-6 pt-4">
            <h5 className="mb-3">INFORMATION</h5>
            <ul className="list-unstyled">
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Track Order</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Shipping & Returns</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">About us</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Help</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Gift Cards</a></li>
            </ul>
          </div>

        
          <div className="col-lg-2 col-md-6 pt-4">
            <h5 className="mb-3">ACCOUNT</h5>
            <ul className="list-unstyled">
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Cart</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">My account</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">My orders</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Wishlist</a></li>
              <li className="pb-2"><a href="#" className="text-secondary text-decoration-none">Affiliate Program</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 pt-4">
            <h5 className="mb-3">Let’s keep in touch</h5>

            <div className="input-group mb-3 rounded-pill border border-transparent">
              <input
                type="email"
                className="form-control border-0 bg-transparent text-dark"
                placeholder="Enter your email"
              />
              <button className="btn btn-outline-primary  border text-dark rounded-pill " type="button">
                <i className="bi bi-arrow-right fs-5"></i>
              </button>
            </div>

            <div className="d-flex gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-tiktok"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
        </div>

        
        {/* <div className="container-fluid border border-secondary my-4 p-3">
          <div className="row text-center text-md-start">
            <div className="col-md-4">
              <p>Didn't find what you were looking for?</p>
              <a href="#" className="text-secondary">Contact Us</a>
            </div>

            <div className="col-md-4">
              <p>How can we help you today?</p>
              <a href="#" className="text-secondary">Help Center</a>
            </div>

            <div className="col-md-4">
              <p>We’d love to hear what you think!</p>
              <a href="#" className="text-secondary">Give Feedback</a>
            </div>
          </div>
        </div> */}

          <hr className="my-5 text-dark opacity-50 border-2" />
        <div className="d-flex justify-content-between flex-wrap pb-3">
          <p className="mb-0 text-secondary small">
            Copyright © IRAVIN. All Rights Reserved
          </p>

          <img src={payment} width="260" alt="payments" />
        </div>
      </div>
      
    </footer>
  );
}