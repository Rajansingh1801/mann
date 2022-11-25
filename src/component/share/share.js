import React from "react";
import "./share.scss";
function Share() {
    return (
        <>
            <div className="share_container">
                <div className="w-100 d-flex align-items-center">
                    <img src={require("../../asset/images/shivg.jpg")} alt="" />
                    <input type="text" name="" id="" placeholder="Express your thought!"/>
                </div>
                <hr className="my-1" />
                <div className="shareitem">
                    <ul className="d-flex justify-content-between align-items-center">
                        <li>
                            <i class="ph-google-photos-logo-bold"></i>
                            <span>Photo or Video</span>
                        </li>
                        <li>
                            <i class="ph-tag-bold"></i>
                            <span>tag</span>
                        </li>
                        <li>
                            <i class="ph-map-pin-bold"> </i>
                                <span>Loaction</span>
                           
                        </li>
                        <li>
                            <i class="ph-smiley-bold"> </i>
                                <span>feeling</span>
                           
                        </li>
                        <li>
                            <button>Share</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Share;
