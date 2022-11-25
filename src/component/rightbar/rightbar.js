import React from "react";
import "./rightbar.scss";

function Rightbar() {
    return (
        <div className="flex-3_5 event px-2 pt-1">
            <div className="event-container">
                <div className="birthday py-1">
                    <div className="birthday-head d-flex align-items-center">
                        <img src={require("../../asset/images/gift.jpg")} alt="" />
                        <p className="ps-1">
                            <strong>Raju ranjan</strong>and <strong>3 other friends</strong>have Birthday Today!
                        </p>
                    </div>
                    <div className="py-1">
                        <img src={require("../../asset/images/birth.jpg")} alt="" />
                    </div>
                </div>
                <div className="online">
                    <h3>Online frinds</h3>
                    <div className="frndlist py-1 ">
                        <div className="d-flex align-items-center pt-1">
                            <div className="position-relative">
                                <img src={require("../../asset/images/person/abdl.png")} alt="" className="position-relative" />
                                <p className="online-icon position-absolute"></p>
                            </div>
                            <h4 className="ps-1">Abdul Kadir</h4>
                        </div>
                        <div className="d-flex align-items-center pt-1">
                            <div className="position-relative">
                                <img src={require("../../asset/images/person/kun.png")} alt="" className="position-relative" />
                                <p className="online-icon position-absolute"></p>
                            </div>
                            <h4 className="ps-1">Kundan Bashin</h4>
                        </div>
                        <div className="d-flex align-items-center pt-1">
                            <div className="position-relative">
                                <img src={require("../../asset/images/person/princ.png")} alt="" className="position-relative" />
                                <p className="online-icon position-absolute"></p>
                            </div>
                            <h4 className="ps-1">Prince Rajnhar</h4>
                        </div>
                        <div className="d-flex align-items-center pt-1">
                            <div className="position-relative">
                                <img src={require("../../asset/images/person/rajt.png")} alt="" className="position-relative" />
                                <p className="online-icon position-absolute"></p>
                            </div>
                            <h4 className="ps-1">Rajat Mehta</h4>
                        </div>
                        <div className="d-flex align-items-center pt-1">
                            <div className="position-relative">
                                <img src={require("../../asset/images/person/raju.png")} alt="" className="position-relative" />
                                <p className="online-icon position-absolute"></p>
                            </div>
                            <h4 className="ps-1">Raju Ranjan</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;
  