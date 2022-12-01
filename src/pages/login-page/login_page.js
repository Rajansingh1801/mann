import React from "react";
import "./login_page.scss";
import { Link } from "react-router-dom";
function Login_page() {
    return (
        <div>
            <div className="login ">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="flex-6">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h1 className="text-center">Mera Mann</h1>
                                    <form action="" method="post">
                                        <div>
                                            <input type="text" name="username" id="" placeholder="Enter Your Username" required className="my-1" /> <br />
                                            <input type="password" name="password" id="" placeholder="Enter Your Password" className="my-1" />
                                            <div>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <input type="submit" value="submit" name="" id="" className="my-1" />
                                                    <button>
                                                        <Link to="/reg">Signup</Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex-6">
                            <img src={require("../../asset/images/jj-ying-7JX0-bfiuxQ-unsplash.jpg")} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login_page;
