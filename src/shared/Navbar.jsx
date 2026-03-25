import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <header className="fixed-top">
        <div className="discount text-white bg-danger p-2 small text-center fw-bold pt-2 ">
          <i className="bi bi-percent fs-6 px-2"></i>
          <span>30% OFF storewide -- limited time! </span>
          <Link
            to="/products"
            className="text-white text-decoration-underline fs-6 fw-bold d-inline-flex align-items-center ps-2"
          >
            shop now
            <i className="bi bi-arrow-right fs-5 ps-2 "></i>
          </Link>
        </div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary py-1">
          <div className="container">
            <Link className="navbar-brand " to="/">
              <img
                src={logo}
                alt="Logo"
                width="100%"
                height="50"
                className="p-3"
              />
            </Link>
            <div className="collapse navbar-collapse " id="navbarScroll">
              <ul className="navbar-nav d-flex align-items-center  gap-4 mx-auto my-1  navbar-nav-scroll" style={{ maxHeight: "100px" }}>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link fw-semibold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                    <i className="bi bi-chevron-down ms-1 fs-6 "></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link fw-semibold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                    <i className="bi bi-chevron-down ms-1"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/contact">
                    Contact us 
                  </Link>
                </li>
              </ul>

              
            </div>
            <div className="d-flex align-items-center gap-3 pb-1">
              <i className="bi bi-search fs-5 cursor-pointer"></i>
              <i className="bi bi-person fs-5 cursor-pointer"></i>
              <div className="position-relative">
                <Link to="/cart" className="fs-6 fw-bold text-decoration-none text-dark d-inline-flex align-items-center">
                <i className="bi bi-bag fs-5 cursor-pointer pe-3"></i>
                <span className=" position-absolute top-50 start-100 translate-middle badge rounded-pill bg-dark " style={{fontSize: '10px'}}>
                  2
                </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
