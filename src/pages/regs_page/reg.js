import React, { useState } from "react";
import "./reg.scss";
import { Link, useHistory } from "react-router-dom";
import Inputfield from "../../component/input/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
function Reg() {
    const history = useHistory(); //it is used to redirect the page to login form
    const [regValues, setregValues] = useState({
        name: "",
        email: "",
        mobile_no: "",
        dob: "",
        password: "",
    });
    const [errMess, setErrMess] = useState(""); // it is used to print the error message
    const [disablebtn, setdisablebtn] = useState(false); // it make btn disbled after click
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setregValues({ ...regValues, [name]: value });
    };
    const signupform = (e) => {
        e.preventDefault();
        console.log(regValues);

        if (!regValues.name || !regValues.email || !regValues.mobile_no || !regValues.dob || !regValues.password) {
            setErrMess("fill all field");
            return; //it check weather all field is completed or not
        }
        setErrMess("");
        setdisablebtn(true);
        createUserWithEmailAndPassword(auth, regValues.email, regValues.password)
            .then((res) => {
                setdisablebtn(false);
                // console.log(res);
                history.push("/login"); //here we redirect the page
            })
            .catch((err) => {
                setdisablebtn(false);
                setErrMess(err.message);
                // console.log("error-", err.message);
            });
    };
    return (
        <>
            <div className="signup w-100 d-flex justify-content-center align-item-center">
                <div>
                    <form onSubmit={signupform}>
                        <h3 className="text-center ">Registration</h3>
                        <div className="my-1 d-flex">
                            <Inputfield value={regValues.name} onChange={getUserData} type="text" name="name" autoComplete="off" placeholder="Enter your name" required />
                            <Inputfield value={regValues.email} onChange={getUserData} type="Email" name="email" autoComplete="off" placeholder="Enter you Email" required />
                        </div>
                        <div className="my-1 d-flex">
                            <Inputfield value={regValues.mobile_no} onChange={getUserData} type="Number" name="mobile_no" placeholder="Enter your Mobile no." required />
                            <Inputfield value={regValues.dob} onChange={getUserData} type="date" name="dob" placeholder="" required />
                        </div>
                        <div className="my-1 d-flex">
                            <Inputfield value={regValues.password} onChange={getUserData} type="password" name="password" placeholder="Password" required />
                            {/* <Inputfield value={regValues.password} onChange={getUserData} type="password" name="password" placeholder="Confirm Password" required /> */}
                        </div>
                        <p className="error text-center fw-700 mt-2 mb-1">{errMess}</p>
                        <div className="text-center">
                            <div>
                                <input onClick={signupform} disabled={disablebtn} type="submit" name="" className="my-1" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-center my-1">
                                If your already Register <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Reg;
