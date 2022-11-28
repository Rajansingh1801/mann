
import React from "react";
import "./post.scss";

function Post({post, user}) {
   
    return (
        <>
            <div className="post_container">
                <div className="post mt-1 p-1">
                    <div className="post_head">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img src={require("../../asset/images/person/"+user?.profilePicture)} alt="" className="img-fluid" />
                                <h4 className="px-0_5">{user?.userName}</h4>
                                <span>{post.date}</span>
                            </div>
                            <div>
                                <i className="ph-dots-three-outline-vertical-bold"></i>
                            </div>
                        </div>
                    </div>
                    <div className="post-cont py-1">
                        <p>{post?.description}</p>
                    </div>
                    <div className="post-img py-1">
                        <img src={require("../../asset/images/"+post?.photo)} alt="" />
                    </div>
                    <div className="post-footer">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <i className="ph-heart-straight-break-bold"></i>
                                <p className="ps-1">{post.like} People Like it</p>
                            </div>
                            <div>
                                <p className="comment">{post.Comment} comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
