import React from "react";

const Register = () => {
    return (
        <>
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> Register </h2>
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
                                <input type="checkbox" name="" /> I accept the rules and regulations of the site! 
                              {" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i>
                                Terms and Conditions
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> 
                                Login
                                {" "}
                            </a>
                        </div>

                        <button className="btn btn-success">
                             {" "}
                               Register                            
                            {" "}
                        </button>
                    </form>
                </div>
            </div>
        </main>
        </>
    );
};

export default Register;
