import React from 'react';
import {NavLink} from "react-router-dom";
const TopNav = () => {
    return ( 
        <>
                  <nav>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 myhead">
                                <ul>
                                    <li>
                                        <NavLink to="" exact> Home </NavLink>
                                        <a href=""> About us </a>
                                        <a href=""> Contact us </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="clientarea">
                                    <div className="signin">
                                        <img  className={{marginBottom: "10px"}} src="https://img.icons8.com/ios-filled/30/000000/user-shield.png"/>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        <NavLink to="/login"    className={{fontsize:"20px"}}  activeStyle={{color:"green", fontSize:"25px"}}> Login</NavLink> 
                                        &nbsp;
                                        /
                                        &nbsp;
                                        <NavLink to="/register" className={{fontsize:"20px"}}  activeStyle={{color:"green", fontSize:"25px"}}> Register </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
        </>
     );
}
 
export default TopNav;