import React from "react";
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <>
        <main className="client-page">
            <div className="container-content">
            <header>
                <img src="https://img.icons8.com/ios/50/000000/security-user-male.png" className="myLogo"/>
                    <h2 className="h2">Register </h2>
                    </header>
                <div className="form-layer">
                    <form action="" method="">
                        <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                aria-describedby="username"
                            />
                        </div>

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                aria-describedby="email-address"
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password"
                                aria-describedby="password"
                            />
                        </div>

                        <div className="accept-rules">
                            <label>
                                <input type="checkbox" name="" />
                                 &nbsp;&nbsp;I 
                                 &nbsp;&nbsp;accept 
                                 &nbsp;&nbsp;the 
                                 &nbsp;&nbsp;rules 
                                 &nbsp;&nbsp;and 
                                 &nbsp;&nbsp;regulations 
                                 &nbsp;&nbsp;of 
                                 &nbsp;&nbsp;the 
                                 &nbsp;&nbsp;site! 
                              {" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i>
                                &nbsp;&nbsp;Terms 
                                &nbsp;&nbsp;and 
                                &nbsp;&nbsp;Conditions
                            </a>
                            <NavLink to="/login">
                                {" "}
                                <i className="zmdi zmdi-account"></i> 
                                &nbsp;&nbsp;Login
                                {" "}
                            </NavLink>
                        </div>
                        <div className="myBtn">
                        <button className="btn btn-light myBtn2">
                             {" "}
                             &nbsp;&nbsp;Register                            
                            {" "}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        </>
    );
};

export default Register;
