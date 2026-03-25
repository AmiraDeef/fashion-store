import { Link } from "react-router-dom";
import cover from "../assets/cover1.jpg";
import insta1 from "../assets/insta1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
export const Home = () => {
  return (
    <>
      <div
        className="bg-img position-relative d-flex align-items-center"
        style={{
          backgroundImage: `url(${cover})`,
        }}
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

      <div className="instgram container py-5">
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

        <div className="row g-3 justify-content-center mb-5  gap-5">
          <div className="col-3 "style={{ width: "18rem" }}>
            <img
              src={insta1}
              alt=""
              className="insta-post w-100 rounded-4 shadow-sm"
            />
          </div>
          <div className="col-3" style={{ width: "18rem" }}>
            <img
              src={insta1}
              alt=""
              className="insta-post w-100 rounded-4 shadow-sm"
            />
          </div>
          <div className="col-3 " style={{ width: "18rem" }}>
            <img
              src={insta1}
              alt=""
              className="insta-post w-100 rounded-4 shadow-sm"
            />
          </div>
          <div className="col-3 " style={{ width: "18rem" }}>
            <img
              src={insta1}
              alt=""
              className="insta-post w-100 rounded-4 shadow-sm"
            />
          </div>
        </div>
        <div className="d-flex flex-row flex-nowrap justify-content-center gap-4 align-items-center">
          <div className="card border-0" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column pb-3">
              <FontAwesomeIcon icon={faTruckMoving} className="fs-1 pb-3" />
              <h5 className="card-title">Free Shipping</h5>
              <p className="card-text text-muted small">quick example text</p>
            </div>
          </div>
          <div className="card border-0" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column pb-3">
              <FontAwesomeIcon icon={faTruckMoving} className="fs-1 pb-3" />
              <h5 className="card-title">Free Shipping</h5>
              <p className="card-text text-muted small">quick example text</p>
            </div>
          </div>
          <div className="card border-0" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column pb-3">
              <FontAwesomeIcon icon={faTruckMoving} className="fs-1 pb-3" />
              <h5 className="card-title">Free Shipping</h5>
              <p className="card-text text-muted small">quick example text</p>
            </div>
          </div>
          <div className="card border-0" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column pb-3">
              <FontAwesomeIcon icon={faTruckMoving} className="fs-1 pb-3" />
              <h5 className="card-title">Free Shipping</h5>
              <p className="card-text text-muted small">quick example text</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
