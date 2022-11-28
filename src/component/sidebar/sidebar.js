import React from "react";
import Frndlist from "../frinendlist/frndlist";
import "./sidebar.scss";

function Sidebar() {
    return (
        <div className="flex-3 sidebar">
            <div className="sidebarc px-2 pt-2">
                <ul>
                    <li>
                        <i className="ph-rss-bold"></i>
                        <span>Feed</span>
                    </li>
                    <li>
                        <i className="ph-chat-centered-text-bold"></i>
                        <span>Chats</span>
                    </li>
                    <li>
                        <i className="ph-youtube-logo-bold"></i>
                        <span>Video</span>
                    </li>
                    <li>
                        <i className="ph-users-three-bold"></i>
                        <span>Groups</span>
                    </li>
                    <li>
                        <i className="ph-bookmark-bold"></i>
                        <span>Bookmarks</span>
                    </li>
                    <li>
                        <i className="ph-question-bold"></i>
                        <span>Question</span>
                    </li>
                    <li>
                        <i className="ph-backpack-bold"></i>
                        <span>Jobs</span>
                    </li>
                    <li>
                        <i className="ph-calendar-blank-bold"></i>
                        <span>Events</span>
                    </li>
                    <li>
                        <i className="ph-graduation-cap-bold"></i>
                        <span>Course</span>
                    </li>
                </ul>
                <button className="mt-1 mb-2 text-gray">Show More</button>
                <hr />
              <Frndlist/>
            </div>
        </div>
    );
}

export default Sidebar;
