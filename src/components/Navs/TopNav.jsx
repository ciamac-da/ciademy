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
                                        <NavLink to="" exact     className="myHome"   activeStyle={{color:"green", fontSize:"30px !important", fontWeight:"bolder" ,  backgroundColor:"white"}}> Home </NavLink>
                                        <NavLink to="/aboutus"   className="myHome"   activeStyle={{color:"green", fontSize:"30px !important", fontWeight:"bolder" ,  backgroundColor:"white" }}> About  us </NavLink>
                                        <NavLink to="/contactus" className="myHome"   activeStyle={{color:"green", fontSize:"30px !important", fontWeight:"bolder" ,  backgroundColor:"white" }}> Contact  us </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="clientarea">
                                    <div className="signin">
                                        <img  className={{marginBottom: "10px"}} src="https://img.icons8.com/ios-filled/48/000000/user-shield.png"/>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        <NavLink to="/login" className="Login"  activeStyle={{color:"green", fontSize:"30px !important", backgroundColor:"white", textShadow: "1px 1px 1px green" , fontWeight:"lighter"}}> Login</NavLink> 
                                        &nbsp;
                                        /
                                        &nbsp;
                                        <NavLink to="/register" className="Login" activeStyle={{color:"green", fontSize:"30px !important", backgroundColor:"white", textShadow: "1px 1px 1px green" , fontWeight:"lighter"}}> Register </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
        </>
     );
}
 
export default TopNav;