import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { isEmpty } from "lodash";

const UserProfile = () => {
    const user = useSelector(state => state.user);

    if (isEmpty(user)) return <Redirect to="/" />;

    return (
        <div className="user-account">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <aside>
                        <div className="avatar-layer">
                            <div className="img-layer">
                                <a href="" className="change-image">
                                    <i className="zmdi zmdi-edit"></i>
                                </a>
                                <img src="images/pic/avatar.png" />
                            </div>
                            <div className="detail">
                                <span>{user.fullname}</span>
                                <span>  Member since </span>
                            </div>
                        </div>

                        <section>
                            <header>
                                <h3>Desk </h3>
                            </header>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <Link to="/logout">
                                            {" "}
                                      Exit from user profile
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </aside>
                </div>
                <div className="col-md-9 col-sm-8 col-xs-12">
                    <section className="user-account-content">
                        <header>
                            <h1> Dashboard</h1>
                        </header>
                        <div className="inner">
                            <div className="account-information">
                                <h3> User Information </h3>
                                <ul>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-account"></i>{" "}
                                       Name : {user.fullname}{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-assignment-account"></i>{" "}
                                        Profile Name:
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-email"></i>{" "}
                                        E-Mail: {user.email}{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-calendar-check"></i>{" "}
                                        Membership Date
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-smartphone-android"></i>{" "}
                                        Tel:
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
