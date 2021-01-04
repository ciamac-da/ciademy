import React from 'react';

const TopNav = () => {
    return ( 
        <>
                  <nav>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 myhead">
                                <ul>
                                    <li>
                                        <a href=""> Cooperation </a>
                                        <a href=""> About us </a>
                                        <a href=""> Contact us </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="clientarea">
                                    <div className="loggedin">
                                        <i className="zmdi zmdi-account"></i>
                                        &nbsp; 
                                        <a href="">&nbsp;&nbsp;Welcome &nbsp;&nbsp;  Ciamac Da</a>
                                    </div>
                                    <div className="signin hidden">
                                        <i className="zmdi zmdi-account"></i>
                                        <a href=""> Login</a> /
                                        <a href=""> Register </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
        </>
     );
}
 
export default TopNav;