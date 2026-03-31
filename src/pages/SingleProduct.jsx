import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


export const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProducts] = useState({})
  const [count, setCount] = useState(1)

  async function getSingleProduct() {
    const res = await api.get(`products/${id}`)
    console.log(res.data)
    setProducts(res.data.product);

  }

  useEffect(() => {
    getSingleProduct();

  }, [id]);

  return (
    <>
      {
        console.log(product)
      }

      <div className="container my-5">
        <div style={{ marginTop: "130px" }}>
          <nav
            className="ms-4"
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-muted text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/" className="text-muted text-decoration-none">
                  {product?.categoryId?.name}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/categories/${product?.categoryId?._id}`} className="text-muted text-decoration-none">
                  {product?.categoryId?.name}
                </Link>
              </li>
              <li
                className="breadcrumb-item text-dark fw-normal  active"
                aria-current="page"
              >
                Product
              </li>
            </ol>
          </nav>
        </div>
        <div className="row d-flex align-items-start">

          <div className="col-6">
            {
              product.images?.map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:8000${img}`}
                  alt={product.name}
                  className="object-fit-cover img-fluid mb-2 rounded-4 ms-2"
                  style={{
                    width: "280px",
                    height: "280px"
                  }}
                />

              ))
            }
          </div>

          <div className="col-6">
            <div className="mb-1 d-flex ">
              <div className="stars "><FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
              </div>

              <div className="reviews ms-4">
                <p className="text-capitalize fw-medium small" >11 reviews</p>
              </div>
            </div>
            <div className="col-6 d-flex flex-column"></div>
            <h2 className="fw-bold m-2 fs-2">{product.name}</h2>
            <p className="text-muted m-2">{product.description}</p>
            <h3 className="text-dark m-2">${product.price}</h3>
            <div className=" d-flex gap-2 my-3 align-items-center justify-content-between"  >

              <div aria-label="Small button group" role="group" className="quntity w-25  wf-medium d-flex align-items-center btn-group btn-group-sm rounded-4 border-0 ">
                 <button onClick={() => setCount(count > 1 ? count - 1 : 1)} className="btn bg-light py-2">-</button>
                 <span className="bg-light text-dark fs-5 fw-medium py-1">{count}</span>
                <button onClick={() => setCount(count + 1)} className="btn bg-light py-2">+</button></div>

              <div className="w-75 ">
                <button className="btn btn-outline-dark px-4 py-2 w-100">Wishlist</button>

              </div>
            </div>

            <button className="btn btn-dark w-100 py-3 rounded-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>


    </>
  )




}