import React from 'react';

const MainNav = () => {
    return ( 
        <>
               <div className="main-menu">
                <div className="container">
                    <nav>
                        <span className="responsive-sign">
                            <i className="zmdi zmdi-menu"></i>
                        </span>
                        <ul>
                            <li>
                                <a href=""> Mobile App Development </a>
                                <ul>
                                    <li>
                                        <a href=""> Xamarin </a>
                                    </li>
                                    <li>
                                        <a href=""> React Native </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href=""> Web Development </a>
                                <ul>
                                    <li>
                                        <a href=""> Asp.net WebForms </a>
                                    </li>
                                    <li>
                                        <a href=""> Asp.net MVC </a>
                                    </li>
                                    <li>
                                        <a href=""> PHP MVC </a>
                                    </li>
                                    <li>
                                        <a href=""> PHP FrameWorks </a>
                                    </li>
                                    <li>
                                        <a href=""> Asp.net Core </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href=""> Windows Programming </a>
                            </li>
                            <li>
                                <a href=""> Web Design </a>
                                <ul>
                                    <li>
                                        <a href=""> Web Design </a>
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
                                <a href="">Operation System </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
     );
}
 
export default MainNav;