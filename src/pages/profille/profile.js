import React from "react";
import "./profilr.scss";
import Feed from "../../component/feed/feed";
import Rightbar from "../../component/rightbar/rightbar";
import Sidebar from "../../component/sidebar/sidebar";
import Topbar from "../../component/topbar/topbar";
import { users } from "../../dummyData";
import { ProfileDetail } from "../../component/rightbar/rightbar";

function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profileSection d-flex">
                <Sidebar />
                <div className="profileRight flex-9">
                    <div className="profileRightTop">
                        <div className="profile-img position-relative">
                            <img src={require("../../asset/images/Need-For-Speed-2015-1080P-HD-Wallpaper.jpg")} alt="" className="img-fluid coverImg" />
                            <img src={require("../../asset/images/person/rajpal yadav.webp")} alt="" className="position-absolute img-fluid profileImg" />
                        </div>
                        <div className="profileInfo text-center">
                            <h3>{users[0].userName}</h3>
                            <p>Comdey BlockBustter Actor</p>
                        </div>
                    </div>
                    <div className="profileRightBottom d-flex">
                        <Feed userId={users[0].id} />
                        <Rightbar Comp={ProfileDetail} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
