import React from "react";
import { status, users } from "../../dummyData";
import "./status.scss";
// import { status } from "../../dummyData";
function Status() {
    return (
        <div>
            <div className="d-flex justify-content-start align-items-center">
                {users.map((user) => (
                    <div className="status-container">
                        <img src={require("../../asset/images/" + status[user.id])} alt="" className="img-fluid" />
                        <br />
                        <h6 title="kundan bhasin" className="text-center">
                            {user.userName}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Status;
