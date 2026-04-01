import React from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera
} from "@fortawesome/free-solid-svg-icons";




export const Account = () => {

    return (
        <>

            <div className="container" style={{ margin: "130px" }}>
                <h2>My Account</h2>

                <div className="row">
                    
                    <div className="col-3 bg-light h-50 rounded-4">
                        <div className=" d-flex justify-content-center">
                            <div className="profile-img position-relative mt-5">
                                <img src={register} alt="" style={{ width: "130px", height: "130px" }} className=" rounded-circle " />
                                <div className="position-absolute bottom-0 start-50 ms-3 p-2 bg-black text-white rounded-circle shadow-sm d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faCamera} />
                                </div>

                            </div>
                            </div>

                        <div className="tabs d-flex justify-content-center py-3 flex-column  ">
                            <h5 className="fw-bold mb-2 text-center">username</h5>


                            <ul className="list-group list-group-flush text-center mt-4 d-flex justify-content-start">

                                <li className="list-group-item bg-transparent fw-bold text-dark">
                                    Account
                                </li>

                                <li className="list-group-item bg-transparent text-secondary">
                                    Address
                                </li>

                                <li className="list-group-item bg-transparent text-secondary">
                                    Orders
                                </li>

                                <li className="list-group-item bg-transparent text-secondary">
                                    Wishlist
                                </li>

                                <li className="list-group-item bg-transparent text-secondary border-0">
                                    Log Out
                                </li>

                            </ul>


                        </div>


                    </div>


                    <div className="col-8 ps-5">
                        <form>
                            <h5 className="fw-bold mb-4">Account Details</h5>

                            <div className="mb-3">
                                <label className="form-label small fw-bold text-secondary text-uppercase">First Name *</label>
                                <input type="text" className="form-control py-2" placeholder="First name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-bold text-secondary text-uppercase">Last Name *</label>
                                <input type="text" className="form-control py-2" placeholder="Last name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-bold text-secondary text-uppercase">Display Name *</label>
                                <input type="text" className="form-control py-2" placeholder="Display name" />
                                <div className="form-text italic small" >
                                    <i>This will be how your name will be displayed in the account section and in reviews</i>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label small fw-bold text-secondary text-uppercase">Email *</label>
                                <input type="email" className="form-control py-2" placeholder="Email" />
                            </div>

                            <h5 className="fw-bold mt-5 mb-4">Password</h5>

                            <div className="mb-3">
                                <label className="form-label small fw-bold text-secondary text-uppercase">Old Password</label>
                                <input type="password" className="form-control py-2" placeholder="Old password" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-bold text-secondary text-uppercase">New Password</label>
                                <input type="password" className="form-control py-2" placeholder="New password" />
                            </div>

                            <div className="mb-4">
                                <label className="form-label small fw-bold text-secondary text-uppercase">Re-enter New Password</label>
                                <input type="password" className="form-control py-2" placeholder="Re-enter new password" />
                            </div>

                            <button type="submit" className="btn btn-dark px-5 py-2 rounded-3">
                                Save changes
                            </button>
                        </form>
                    </div>

                </div>









            </div>

        </>
    );
};

