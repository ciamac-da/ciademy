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
                                        <NavLink to="" exact className="myHome"     activeStyle={{color:"green", fontSize:"30px !important", textShadow: "1px 1px 1px green" }}> Home </NavLink>
                                        <NavLink to="/aboutus" className="myHome"   activeStyle={{color:"green", fontSize:"30px !important", textShadow: "1px 1px 1px green" }}> About &nbsp; us </NavLink>
                                        <NavLink to="/contactus" className="myHome" activeStyle={{color:"green", fontSize:"30px !important", textShadow: "1px 1px 1px green" }}> Contact &nbsp; us </NavLink>
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
                                        <NavLink to="/login" className="Login"  activeStyle={{color:"green", fontSize:"30px !important", textShadow: "1px 1px 1px green"}}> Login</NavLink> 
                                        &nbsp;
                                        /
                                        &nbsp;
                                        <NavLink to="/register" className="Login" activeStyle={{color:"green", fontSize:"30px", textShadow: "1px 1px 1px green"}}> Register </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
        </>
     );
}
 
export default TopNav;