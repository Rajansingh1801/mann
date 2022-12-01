import React from "react";
import "./reg.scss";
import { Link } from "react-router-dom";
function Reg() {
    return (
        <>
            <div className="signup w-100 d-flex justify-content-center align-item-center">
                <form className="">
                    <div className="my-1">
                        <input type="text" name="name" id="" required autoComplete="off" placeholder="Enter your name" />
                        <input type="Email" name="email" id="" required autoComplete="off" placeholder="Enter you Email" />
                    </div>
                    <div className="my-1">
                        <input type="Number" name="mobile_no" required placeholder="Enter your Mobile no." />
                        <input type="date" name="dob" id="" placeholder="" />
                    </div>
                    <div className="my-1 ">
                        <input type="password" name="password" id="" placeholder="Password" />
                        <input type="password" name="password" id="" placeholder="Confirm Password" />
                    </div>
                    <div className="text-center">
                        <div>
                            <input type="submit" name="" id="" className="my-1" />
                            <p className="text-center my-1">If your already Register</p>
                            <button>
                                <Link to="/login">Login</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Reg;
