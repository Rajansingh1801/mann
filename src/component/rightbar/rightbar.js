import React from "react";
import Onlinefrnd from "../onlinefrnd/onlinefrnd";
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
                <Onlinefrnd/>
            </div>
        </div>
    );
}

export default Rightbar;
  