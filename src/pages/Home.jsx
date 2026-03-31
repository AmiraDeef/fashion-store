import { Link } from "react-router-dom";
import cover from "../assets/cover1.jpg";
import insta1 from "../assets/insta1.jpg";
import winter from "../assets/winter.jpg";
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { api } from "../api/axios";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHatCowboySide,
  faShirt,
  faSocks,
  faMitten,
  faUserTie,
  faVest,
  faStar,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {


  const [products, setProducts] = useState([]);

  async function getBestSeller() {
    const res = await api.get("products");
    setProducts(res.data.products.slice(0, 8))
  }
  useEffect(() => {
    getBestSeller();

  }, []);








  return (
    <>
      <div
        className="bg-img  my-5 pt-4 position-relative d-flex align-items-center overflow-hidden"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="content-img text-content text-white position-absolute d-flex flex-column align-items-start gap-3 top-70 start-0 p-5 ">
          <h1 className="">Unveil your style </h1>
          <h1>
            Elevate
            <span className="text-danger-emphasis">Every Day</span>
          </h1>

          <p className="text-light col-12 text-opacity-75">
            Everyone need a good winter clothes,
            <br />
            Find your perfect look with our collection
          </p>

          <button className="btn btn-light py-2 rounded-pill px-5 my-4 text-trancp">
            Shop Now
          </button>
        </div>
      </div>
      <div className="brands container py-2">
        <p className="text-center text-dark mb-4 small fw-bold text-uppercase p-3">
          Trending Brands
        </p>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 5 },

            1024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper pb-5"
        >
          <SwiperSlide className="d-flex justify-content-center">
            <FontAwesomeIcon
              icon={faHatCowboySide}
              size="3x"
              className="opacity-50"
            />
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faShirt} size="3x" className="opacity-50" />
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faSocks} size="3x" className="opacity-50" />
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faMitten} size="3x" className="opacity-50" />
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <FontAwesomeIcon
              icon={faUserTie}
              size="3x"
              className="opacity-50"
            />
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faVest} size="3x" className="opacity-50" />
          </SwiperSlide>
        </Swiper>
      </div>


      {/* {</Products>} */}

      <div className="container my-5">
        <h3 className="fw-bold mb-4">Best Seller</h3>
        <div className="row g-4">
          {products.map((item) => (
            <div className="col-6 col-md-3" key={item._id}>
              <div className="card border-0 rounded-0 h-100 product-card">
                <div className="position-relative rounded-4 overflow-hidden bg-light" style={{ height: "320px" }}>

                  <img
                    src={`http://localhost:8000${item.images[0]}`}
                    className="w-100 h-100 object-fit-cover"
                    alt={item.name}
                  />
                  <div className="position-absolute top-0 start-0 m-3 d-flex flex-column gap-2">
                    <span className="badge bg-white text-dark shadow-sm text-uppercase">hot</span>

                  </div>
                </div>
                <div className="card-body px-0 pt-3">
                  <div className="mb-1 small">
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                  </div>
                  <h6 className="fw-bold mb-1 text-truncate">{item.name}</h6>
                  <span className="fw-bold small text-dark">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="bg-light " style={{ height: "450px" }}>
        <div className="row">
          <div className="col-6 p-0">
            <img src={winter} alt="" className=" w-100 object-fit-cover" style={{ height: "450px", display: "block" }} />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-start gap-3 p-5">
            <h6 className="text-primary fw-medium fs-4 text-uppercase">sale up to 35% off</h6>
            <h2 className="fw-semibold fs-1 text-capitalize">hunderds of new lower prices!</h2>
            <h6 className="fs-4 fw-light text-uppercase">Hurry up!!! winter is comming !</h6>
            <div className="">
              <Link
                to="/products"
                className="text-dark text-decoration-underline fs-5 fw-bold d-inline-flex align-items-center ps-2"
              >
                shop now
                <i className="bi bi-arrow-right fs-5 ps-2 "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="text-center">
          <h6 className="text-primary text-uppercase mb-4 fs-5">promotion</h6>
          <h5 className="fw-semibold fs-1 text-capitalize mb-4">Winter Collection</h5>
          <p className="fw-light fs-5 mb-4">introduction the new winter jackets</p>

          <div className="row justify-content-center">

            <div className="col-9 ">

              <div className="ratio ratio-16x9 rounded-4 overflow-hidden ">
                <iframe
                  src="https://www.youtube.com/embed/0Fi_arjVEfY?si=nyXdjjZzLXSKhPlx"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-4"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="instgram container py-5 overflow-hidden">
        <div className="text-center mb-4">
          <p className=" text-muted mb-2 small fw-bold text-uppercase p-3">
            newsfeed
          </p>
          <h2 className="fs-1 fw-semibold">Instagram</h2>
          <p className="text-center text-dark mb-2  fw-semibold text-uppercase p-3">
            Follow us on Instagram for the latest updates and exclusive offers!
          </p>
          <p className="text-center text-muted mb-2  fw-medium p-3">
            @instagram_official
          </p>
        </div>

        <div className="row g-4 justify-content-center mb-5">

          <div className="col-6 col-md-3">
            <img src={insta1} alt="" className="w-100 rounded-4 shadow-sm object-fit-cover" style={{ height: "300px" }} />
          </div>
          <div className="col-6 col-md-3">
            <img src={insta1} alt="" className="w-100 rounded-4 shadow-sm object-fit-cover" style={{ height: "300px" }} />
          </div>
          <div className="col-6 col-md-3">
            <img src={insta1} alt="" className="w-100 rounded-4 shadow-sm object-fit-cover" style={{ height: "300px" }} />
          </div>
          <div className="col-6 col-md-3">
            <img src={insta1} alt="" className="w-100 rounded-4 shadow-sm object-fit-cover" style={{ height: "300px" }} />
          </div>
        </div>
        <div className="container-fluid  py-5">
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
                    <p className="card-text text-muted small">30 days guarantee</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="card border-0 bg-transparent h-100">
                  <div className="card-body d-flex flex-column align-items-start p-0">
                    <i className="bi bi-lock fs-1 mb-3"></i>
                    <h5 className="card-title fw-bold">Secure Payments</h5>
                    <p className="card-text text-muted small">Secured by Stripe</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="card border-0 bg-transparent h-100">
                  <div className="card-body d-flex flex-column align-items-start p-0">
                    <i className="bi bi-telephone fs-1 mb-3"></i>
                    <h5 className="card-title fw-bold">24/7 Support</h5>
                    <p className="card-text text-muted small">Phone and Email support</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
