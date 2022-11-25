import React from "react";
import "./sidebar.scss";

function Sidebar() {
    return (
        <div className="flex-3 sidebar">
            <div className="sidebarc px-2 pt-2">
                <ul>
                    <li>
                        <i class="ph-rss-bold"></i>
                        <span>Feed</span>
                    </li>
                    <li>
                        <i class="ph-chat-centered-text-bold"></i>
                        <span>Chats</span>
                    </li>
                    <li>
                        <i class="ph-youtube-logo-bold"></i>
                        <span>Video</span>
                    </li>
                    <li>
                        <i class="ph-users-three-bold"></i>
                        <span>Groups</span>
                    </li>
                    <li>
                        <i class="ph-bookmark-bold"></i>
                        <span>Bookmarks</span>
                    </li>
                    <li>
                        <i class="ph-question-bold"></i>
                        <span>Question</span>
                    </li>
                    <li>
                        <i class="ph-backpack-bold"></i>
                        <span>Jobs</span>
                    </li>
                    <li>
                        <i class="ph-calendar-blank-bold"></i>
                        <span>Events</span>
                    </li>
                    <li>
                        <i class="ph-graduation-cap-bold"></i>
                        <span>Course</span>
                    </li>
                </ul>
                <button className="mt-1 mb-2 text-gray">Show More</button>
                <hr />
                <div className="friendlist">
                    <ul>
                        <li>
                            <img src={require("../../asset/images/person/abdl.png")} alt="" className="img-fluid" />
                            <span>Abdul Kadir</span>
                        </li>
                        <li>
                            <img src={require("../../asset/images/person/kun.png")} alt="" className="img-fluid" />
                            <span>Kundan</span>
                        </li>
                        <li>
                            <img src={require("../../asset/images/person/princ.png")} alt="" className="img-fluid" />
                            <span>Prince Rajbhar</span>
                        </li>
                        <li>
                            <img src={require("../../asset/images/person/rajt.png")} alt="" className="img-fluid" />
                            <span>Rajat Mehata</span>
                        </li>
                        <li>
                            <img src={require("../../asset/images/person/raju.png")} alt="" className="img-fluid" />
                            <span>Raju Ranjan</span>
                        </li>
                        <li>
                            <img src={require("../../asset/images/person/sal.png")} alt="" className="img-fluid" />
                            <span>Salman Khan</span>
                        </li>
                        <li>
                            <img src={require("../../asset/images/person/shar.png")} alt="" className="img-fluid" />
                            <span>Shahrukh Khan</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
