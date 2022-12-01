import React from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
// import "../../router"
function Topbar() {
    return (
        <>
            <div className="container topbar px-3 d-flex py-0_5 align-items-center">
                <div className="leftcontainer flex-3">
                    <h1>Mera Mann</h1>
                </div>
                <div className="centercontainer flex-5 ">
                    <div className="inputdiv d-flex align-items-center w-100 ps-1 pe-2 border-0">
                        <i className="ph-magnifying-glass-bold me-1"></i>
                        <input type="text" name="" id="" className="w-100 border-0" placeholder="Search your baddy!" />
                    </div>
                </div>
                <div className="rightcontainer flex-4">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="d-flex justify-content-between align-items-center text-white">
                            <h4 className="pe-1">Home Page</h4>
                            <h4>TimeLine</h4>
                        </div>
                        <div>
                            <ul className="d-flex justify-content-between align-items-center text-white">
                                <li className="pe-2">
                                    <route href="#" className="position-relative">
                                        <i className="ph-user-bold "></i> <span className="count position-absolute">1</span>
                                    </route>
                                </li>
                                <li className="pe-2">
                                    <route href="#" className="position-relative">
                                        <i className="ph-chat-text-bold"></i> <span className="count position-absolute">3</span>
                                    </route>
                                </li>
                                <li className="">
                                    <route href="#" className="position-relative">
                                        <i className="ph-bell-bold"></i>
                                        <span className="count position-absolute">5</span>
                                    </route>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <Link to="/profile">
                                    <img src={require("../../asset/images/shivg.jpg")} alt="" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topbar;
