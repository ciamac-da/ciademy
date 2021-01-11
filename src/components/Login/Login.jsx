import React from "react";
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                <img src="https://img.icons8.com/ios/50/000000/security-user-male.png" className="myLogo"/>
                    <h2 className="h2">Login </h2>
                </header>

                <div className="form-layer">
                    <form action="" method="">
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
                                placeholder="Email Address"
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
                                placeholder="Password "
                                aria-describedby="password"
                            />
                        </div>

                        <div className="remember-me">
                            <label>
                                <input type="checkbox" name="" /> &nbsp;&nbsp; Remember&nbsp;&nbsp;Me{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <img src="https://img.icons8.com/ios-filled/24/000000/sign-in-form-password.png"/>
                                &nbsp;&nbsp;Password&nbsp;&nbsp;Forgot
                            </a>
                            <NavLink to="/register">
                                {" "}
                                <img src="https://img.icons8.com/material-sharp/24/000000/login-rounded-right.png"/>
                                
                                 &nbsp;&nbsp;Register
                               {" "}
                            </NavLink>
                        </div>
                        <div className="myBtn">
                            {" "}
                        <button className="btn btn-light myBtn2">
                            Login{" "}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
