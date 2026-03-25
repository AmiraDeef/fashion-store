import store from "../assets/store.jpg";
import map from "../assets/map.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className="container">
        <div style={{ marginTop: "130px" }}>
          <nav
            className="ms-4"
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="text-muted text-decoration-none">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-dark fw-normal  active"
                aria-current="page"
              >
                Contact us
              </li>
            </ol>
          </nav>
        </div>

        <h2 className="display-4 fw-bold mb-4 w-75">
          We believe in sustainable decor. We’re passionate about life at home.
        </h2>
        <p className="text-black w-75">
          Our features timeless furniture,, with natural fabrics, curved lines,
          plenty of mirrors and classic design with natural fabrics, with
          natural fabrics, curved lines, plenty of mirrors and classic design
          with natural fabrics, curved lines, plenty of mirrors and classic
          design with natural fabrics, plenty of mirrors and classic design.
        </p>
      </div>
      <div className="container g-0  my-5">
        <div className="row bg-light align-items-center rounded-start-4 d-flex justify-content-between">
          <div className="col-6 p-0">
            <img
              src={store}
              alt=""
              className="object-fit-cover w-100 rounded-4"
              style={{ height: "400px" }}
            />
          </div>
          <div className="col-5">
            <h2 className="fw-bold mb-3 fs-1">About Us</h2>
            <p className="text-muted mb-4">
              VisioCreate is a gift & decorations store based in HCMC, Vietnam.
              Est since 2019. based in HCMC, Vietnam. Est since 2019. based in
              HCMC, Vietnam. Est since 2019. based in HCMC, Vietnam. Est since
              2019.
            </p>
            <Link
              to="/"
              className="text-dark fw-semibold text-decoration-underline fs-5"
            >
              Shop Now <i className="bi bi-arrow-right fs-5 ps-2 "></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="text-center">
          <h2 className="fw-bold mb-4 text-capitalize">contact us</h2>
          <div className="row my-4 d-flex align-items-center justify-content-evenly gap-3">
            <div
              className="bg-light col-3 text-center px-5 py-3 rounded-4 d-flex flex-column align-items-center justify-content-center gap-3 h-100"
              
            >
              <FontAwesomeIcon icon={faHouse} className="fs-3" />
              <h6 className="text-uppercase text-muted fw-semibold">Address</h6>
              <p className='fw-medium fs-6'>123 Main Street, HCMC, Vietnam</p>
            </div>
            <div
              className="bg-light col-3 text-center px-5 py-3 rounded-4 d-flex flex-column align-items-center justify-content-center gap-3"
              
            >
              <FontAwesomeIcon icon={faEnvelope} className="fs-3" />
              <h6 className="text-uppercase text-muted fw-semibold">Email</h6>
              <p  className='fw-medium fs-6'>info@visiocreate.com</p>
            </div>
            <div
              className="bg-light col-3 text-center px-5 py-3 rounded-4 d-flex flex-column align-items-center justify-content-center gap-3"
             
            >
              <FontAwesomeIcon icon={faPhone} className="fs-3" />
              <h6 className="text-uppercase text-muted fw-semibold">Phone</h6>
              <p className='fw-medium fs-6'>+84 123 456 789</p>
            </div>
          </div>
        </div>

        <div className="row g-5 justify-content-center my-5">
          <div className="col-md-6">
            <form>
              <div className="mb-4">
                <label className="form-label text-uppercase small fw-bold text-muted">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control border-dark-subtle p-3"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="form-label text-uppercase small fw-bold text-muted">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control border-dark-subtle p-3"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="form-label text-uppercase small fw-bold text-muted">
                  Message
                </label>
                <textarea
                  className="form-control border-dark-subtle p-3"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="btn btn-dark w-100 py-3 fw-bold rounded-pill">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <div
              className="rounded-4 overflow-hidden shadow-sm "
              style={{ height: "550px" }}
            >
              <img src={map} alt="" className="object-fit-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light py-5 my-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-lg-3">
              <div className="card border-0 bg-transparent h-100">
                <div className="card-body d-flex flex-column align-items-start p-0">
                  <i className="bi bi-truck fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Free Shipping</h5>
                  <p className="card-text text-muted small">Order above $200</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="card border-0 bg-transparent h-100">
                <div className="card-body d-flex flex-column align-items-start p-0">
                  <i className="bi bi-cash-stack fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Money-back</h5>
                  <p className="card-text text-muted small">
                    30 days guarantee
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="card border-0 bg-transparent h-100">
                <div className="card-body d-flex flex-column align-items-start p-0">
                  <i className="bi bi-lock fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Secure Payments</h5>
                  <p className="card-text text-muted small">
                    Secured by Stripe
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="card border-0 bg-transparent h-100">
                <div className="card-body d-flex flex-column align-items-start p-0">
                  <i className="bi bi-telephone fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">24/7 Support</h5>
                  <p className="card-text text-muted small">
                    Phone and Email support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
