import { api } from "../api/axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./Products.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"


export const Products = () => {
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem("token");
    const { categoryName } = useParams()
    async function getProducts() {
        try {
            const endpoint = categoryName ? `categories/${categoryName}` : "products";
            console.log(categoryName)
            const res = await api.get(endpoint, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const finalData = res.data.category ? res.data.category.products : res.data.products;

            setProducts(finalData || []);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        }
    }
    const navigate = useNavigate()
    const handleCategoryChange = (e) => {
        const selected = e.target.value;
        console.log(selected)
        if (selected === "all categories") {
            navigate("/products");
        } else {

            navigate(`/categories/${selected}`);
        }
    };



    useEffect(() => {
        getProducts();
    }, [categoryName]);

    return (
        <><div className="container products py-5 m-auto">
            <div className="d-flex flex-column">
                <div className="text-center mb-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
                            <li className="breadcrumb-item active text-dark">Shop</li>
                        </ol>
                    </nav>
                    <h1 className="fw-bold">Shop Page</h1>
                    <p className="text-muted">Let's design the place you always imagined.</p>
                </div>



                <div className="row col-5">
                    <div className="col-6 mb-4">
                        <label className="fw-bold mb-2 text-uppercase">CATEGORIES</label>
                        <select className="form-select border-2" onChange={handleCategoryChange}>
                            <option >all categories</option>
                            <option value="Jackets">Jackets</option>
                            <option value="Bombers">Bombers</option>
                            <option value="Hoodiee">Hoodiee</option>


                        </select>
                    </div>
                    <div className="col-6 mb-4">
                        <label className="fw-bold mb-2 text-uppercase">price</label>
                        <select className="form-select border-2">
                            <option>All Price</option>
                        </select>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="fw-bold m-0 text-uppercase">clothes</h5>
                            <div className="d-flex align-items-center gap-2">
                                <span className="small fw-bold">Sort by</span>
                                <select className="form-select form-select-sm border-0 w-auto fw-bold">
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        <div className="row g-4">
                            {products.map((item) => {


                                return (
                                    <div className="col-3" key={item._id}>
                                        <Link to={`/products/${item._id}`} className="text-decoration-none">
                                        <div className="card border-0 rounded-0 h-100 product-card">


                                            <div className="position-relative rounded-4 overflow-hidden bg-light product-top" style={{ height: "320px" }}>
                                                <div className="position-absolute top-0 start-0 m-3 d-flex flex-column gap-2" >
                                                    <span className="badge bg-white text-dark fw-bold shadow-sm">NEW</span>
                                                    <span className="badge bg-success text-white fw-bold shadow-sm">-50%</span>
                                                </div>
                                                {
                                                    console.log(item.images[0])
                                                }

                                                <img
                                                    src={`https://ecommerce-store-ashen-alpha.vercel.app${item.images[0]}`}
                                                    className="w-100 h-100 object-fit-cover "

                                                />


                                                <div className="btn-overlay position-absolute bottom-0 w-100 p-3">
                                                    <button className="btn btn-dark w-100 rounded-1 fw-bold py-2">
                                                        Add to cart
                                                    </button>
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
                                                <h6 className="fw-bold mb-1">{item.name}</h6>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <span className="fw-bold">${item.price}</span>

                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>


                        <div className="text-center mt-5 ">
                            <button className="btn btn-outline-dark rounded-pill px-5 py-2 fw-bold shadow-sm">
                                Show more
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div></>
        
    );
};