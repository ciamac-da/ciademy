import React from "react";

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
                                <i className="zmdi zmdi-lock"></i> &nbsp;&nbsp;Password&nbsp;&nbsp;Forgot
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> &nbsp;&nbsp;Membership
                               {" "}
                            </a>
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
