import React from "react";
import Foorter from "../components/common/Footer.jsx";


const Ciademy = props => {
    return (
        <React.Fragment>
            <div className="landing-layer">
                <div className="container">
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

                    <header>
                        <a href="" className="logo">
                            <img src="images/ciademy.jpg" className="ciademy-logo" />
                        </a>
                        <h1> Ciademy</h1>
                        <h2>
                            {" "}
                            Massive Open-Online-Course Provider{" "}
                        </h2>
                    </header>
                    <div className="search-form">
                        <form>
                            <input
                                type="text"
                                name=""
                                placeholder="What do you want to Learn?"
                            />
                            <button>
                                <i className="zmdi zmdi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>


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

            <main id="home-page">
                <div className="container">
                    <section className="terms-items">
                        <header>
                            <h2>Last Courses </h2>
                            <a href="">All Courses </a>
                        </header>
                        <div className="row">

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer cardImage">
                                        <img src="images/pic/mat.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                        Material UI{" "}
                                        </a>
                                    </h2>
                                    <span>Free </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/reactjs.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                        ReactJs{" "}
                                        </a>
                                    </h2>
                                    <span> 299$ USD  </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/JS.jpeg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            JavaScript{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/ttt.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                           Typesript{" "}
                                        </a>
                                    </h2>
                                    <span> 149$ USD  </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/boostrap_img.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            Bootstrap{" "}
                                        </a>
                                    </h2>
                                    <span> Free</span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/HTMLCSS.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            HTML/CSS{" "}
                                        </a>
                                    </h2>
                                    <span> Free </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/mern.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            MERN{" "}
                                        </a>
                                    </h2>
                                    <span> 399$ USD  </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/py.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            Python{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                        </div>
                    </section>

                    <hr />

                    <section className="terms-items">
                        <header>
                            <h2> Favourite Courses </h2>
                            <a href=""> All Courses </a>
                        </header>
                        <div className="row">
                       
                          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer cardImage">
                                        <img src="images/pic/mat.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                        Material UI{" "}
                                        </a>
                                    </h2>
                                    <span>Free </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/reactjs.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                        ReactJs{" "}
                                        </a>
                                    </h2>
                                    <span> 299$ USD  </span>
                                </article>
                            </div>
                            
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/reactn.jpeg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                           React Native{" "}
                                        </a>
                                    </h2>
                                    <span> 149$ USD  </span>
                                </article>
                            </div>


                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/JS.jpeg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            JavaScript{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/ttt.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                           Typesript{" "}
                                        </a>
                                    </h2>
                                    <span> 149$ USD  </span>
                                </article>
                            </div>
                            
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/mongodb.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                           MongoDB{" "}
                                        </a>
                                    </h2>
                                    <span> 149$ USD  </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/nodejs.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            NodeJs{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/boostrap_img.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            Bootstrap{" "}
                                        </a>
                                    </h2>
                                    <span> Free</span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/HTMLCSS.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            HTML/CSS{" "}
                                        </a>
                                    </h2>
                                    <span> Free </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/mern.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            MERN{" "}
                                        </a>
                                    </h2>
                                    <span> 399$ USD  </span>
                                </article>
                            </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/py.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            Python{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/vuejs.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            VueJs{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/Angular.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            Angular{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/cpp.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            C++{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/ASP-NET.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                           ASP.NET{" "}
                                        </a>
                                    </h2>
                                    <span> 149$ USD  </span>
                                </article>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/java.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            Java{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>
                           
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/csharp.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            C#{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                            
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/xamarin.jpg" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                           Xamarin{" "}
                                        </a>
                                    </h2>
                                    <span> 149$ USD  </span>
                                </article>
                            </div>
                        
                        

                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                                <article>
                                    <a href="" className="img-layer">
                                        <img src="images/pic/php.png" />
                                    </a>
                                    <h2>
                                        <a href="">
                                            {" "}
                                            PHP{" "}
                                        </a>
                                    </h2>
                                    <span> 199$ USD </span>
                                </article>
                            </div>

                        </div>
                    </section>
                </div>
            </main>

     <Foorter />
        </React.Fragment>
    );
};

export default Ciademy;
