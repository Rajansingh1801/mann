import React, { useState } from "react";
import "./login_page.scss";
import { Link } from "react-router-dom";
import Inputfield from "../../component/input/input";
function Login_page() {
    const [inputvalue, setinputvalue] = useState({ email: "", password: "" });

    const submitform = (e) => {
        e.preventDefault();
        console.log(inputvalue);
    };

    return (
        <div>
            <div className="login">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="flex-6">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h1 className="text-center">Mera Mann</h1>
                                    <form action="" method="">
                                        <div>
                                            <Inputfield onChange={(event) => setinputvalue((prev) => ({ ...prev, name: event.target.value }))} name="Email" value={inputvalue.name} type="email" placeholder="Enter Your Email id" className="my-1" required /> <br />
                                            <Inputfield onChange={(event) => setinputvalue((prev) => ({ ...prev, password: event.target.value }))} type="password" value={inputvalue.password} name="password" placeholder="Enter Your Password" className="my-1" required />
                                            <div>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <input onClick={submitform} type="submit" value="submit" className="my-1" />
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
