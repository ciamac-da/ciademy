import React from 'react';

const MainNav = () => {
    return ( 
        <>
               <div className="main-menu">
                <div className="container myLine">
                    <nav>
                        <span className="responsive-sign">
                            <i className="zmdi zmdi-menu"></i>
                        </span>
                        <ul>
                            <li>
                                <a href=""> Mobile-App &nbsp;&nbsp; Development </a>
                                <ul className="adjList">
                                    <li>
                                        <a href=""> Xamarin </a>
                                    </li>
                                    <li>
                                        <a href=""> React &nbsp;&nbsp; Native </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href=""> Web &nbsp;&nbsp; Development </a>
                                <ul>
                                    <li>
                                        <a href=""> Asp.net &nbsp;&nbsp; WebForms </a>
                                    </li>
                                    <li>
                                        <a href=""> Asp.net &nbsp;&nbsp; MVC </a>
                                    </li>
                                    <li>
                                        <a href=""> PHP &nbsp;&nbsp; MVC </a>
                                    </li>
                                    <li>
                                        <a href=""> PHP &nbsp;&nbsp; FrameWorks </a>
                                    </li>
                                    <li>
                                        <a href=""> Asp.net &nbsp;&nbsp; Core </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href=""> Windows &nbsp;&nbsp; Programming </a>
                            </li>

                            <li>
                                <a href=""> Web &nbsp;&nbsp; Design </a>
                                <ul>
                                    <li>
                                        <a href=""> Web &nbsp;&nbsp; Design </a>
                                    </li>
                                    <li>
                                        <a href=""> Bootstrap </a>
                                    </li>
                                    <li>
                                        <a href=""> Angular </a>
                                    </li>
                                    <li>
                                        <a href=""> React </a>
                                    </li>
                                    <li>
                                        <a href=""> Jquery </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href=""> Database </a>
                            </li>
                            <li>
                                <a href="">SEO </a>
                            </li>
                            <li>
                                <a href="">Operation &nbsp;&nbsp; System </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
     );
}
 
export default MainNav;