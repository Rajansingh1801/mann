import React, { useState } from "react";
import "./login_page.scss";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Inputfield from "../../component/input/input";
import { Button } from "@mui/material";
import apk from "../../asset/mera-mann.apk";
// import { async } from "@firebase/util";
function Login_page() {
    const history = useHistory(); //it is used to redirect the page to login form
    const [inputvalue, setinputvalue] = useState({ email: "", password: "" });
    const [errMess, setErrMess] = useState(""); // it is used to print the error message
    const [disablebtn, setdisablebtn] = useState(false); // it make btn disbled after click

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setinputvalue({ ...inputvalue, [name]: value });
    };

    const submitform = (e) => {
        e.preventDefault();
        console.log(inputvalue);

        if (!inputvalue.email || !inputvalue.password) {
            setErrMess("fill all field");
            return; //it check weather all field is completed or not
        }
        setErrMess("");
        setdisablebtn(true);
        signInWithEmailAndPassword(auth, inputvalue.email, inputvalue.password)
            .then((res) => {
                setdisablebtn(false);
                console.log(res);
                history.push("/home"); //here we redirect the page
            })
            .catch((err) => {
                setdisablebtn(false);
                setErrMess(err.message);
                // console.log("error-", err.message);
            });
    };
    return (
        <div>
            <div className="login">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="flex-6">
                            <div className="d-flex justify-content-center form-body">
                                <div>
                                    <h1 className="text-center">Login</h1>
                                    <form action="" method="">
                                        <div>
                                            <Inputfield name="email" onChange={getUserData} value={inputvalue.name} type="email" placeholder="Enter Your Email id" className="my-1" required /> <br />
                                            <Inputfield type="password" onChange={getUserData} value={inputvalue.password} name="password" placeholder="Enter Your Password" className="my-1" required />
                                            <div>
                                                <p className="error text-center fw-700 mt-2 mb-1">{errMess}</p>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <input onClick={submitform} disabled={disablebtn} type="submit" value="submit" className="my-1" />
                                                    <button>
                                                        <Link to="/reg" className="w-100 h-100">
                                                            Signup
                                                        </Link>
                                                    </button>
                                                </div>
                                                <div className="apkbtn">
                                                    <a href={apk}>
                                                        <Button>downlaod apk</Button>
                                                    </a>
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

// onChange={(event) => setinputvalue((prev) => ({ ...prev, name: event.target.value }))}
// onChange={(event) => setinputvalue((prev) => ({ ...prev, password: event.target.value }))}
