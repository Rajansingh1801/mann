import React from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.scss";
import "../../../src/dummyData";
import { post,users } from "../../../src/dummyData";

function Feed() {
    return (
        <div className="flex-5_5 feedsection pt-2">
            <div className="feedcontainer px-2">
                <Share />
                {post.map((p) => (
                    <Post key={p.id} post={p} user={users.find(u => u.id === p.userId)} />
                ))}
            </div>
        </div>
    );
}

export default Feed;
