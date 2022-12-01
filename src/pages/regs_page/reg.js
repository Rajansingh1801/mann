import React, { useState } from "react";
import "./reg.scss";
import { Link } from "react-router-dom";
import Inputfield from "../../component/input/input";
function Reg() {
    const [reg_input, setResData] = useState({
        name: "",
        email: "",
        mobile_no: "",
        dob: "",
        password: "",
    });
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setResData({ ...reg_input, [name]: value });
    };
    const signupform = (e) => {
        e.preventDefault();
        console.log(reg_input);
    };
    return (
        <>
            <div className="signup w-100 d-flex justify-content-center align-item-center">
                <div>
                    <form onSubmit={signupform}>
                        <div className="my-1 d-flex">
                            <Inputfield value={reg_input.name} onChange={getUserData} type="text" name="name" autoComplete="off" placeholder="Enter your name" required />
                            <Inputfield value={reg_input.email} onChange={getUserData} type="Email" name="email" autoComplete="off" placeholder="Enter you Email" required />
                        </div>
                        <div className="my-1 d-flex">
                            <Inputfield value={reg_input.mobile_no} onChange={getUserData} type="Number" name="mobile_no" placeholder="Enter your Mobile no." required />
                            <Inputfield value={reg_input.dob} onChange={getUserData} type="date" name="dob" placeholder="" required />
                        </div>
                        <div className="my-1 d-flex">
                            <Inputfield value={reg_input.password} onChange={getUserData} type="password" name="password" placeholder="Password" required />
                            <Inputfield value={reg_input.password} onChange={getUserData} type="password" name="password" placeholder="Confirm Password" required />
                        </div>
                        <div className="text-center">
                            <div>
                                <input onClick={signupform} type="submit" name="" className="my-1" />
                            </div>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-center my-1">If your already Register</p>
                        <button>
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reg;
