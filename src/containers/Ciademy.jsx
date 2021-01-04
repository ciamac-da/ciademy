import React from "react";
import Foorter from "../components/common/Footer.jsx";
import Courses from '../components/courses/Courses';

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


            <main id="home-page"
          /*
          ........######.....###....########..########...######.
          .......##....##...##.##...##.....##.##.....##.##....##
          .......##........##...##..##.....##.##.....##.##......
          .......##.......##.....##.########..##.....##..######.
          .......##.......#########.##...##...##.....##.......##
          .......##....##.##.....##.##....##..##.....##.##....##
          ........######..##.....##.##.....##.########...######.
          */
            >
                <div className="container">
                <Courses 
              /*
              ........######...#######..##.....##.########...######..########..######.
              .......##....##.##.....##.##.....##.##.....##.##....##.##.......##....##
              .......##.......##.....##.##.....##.##.....##.##.......##.......##......
              .......##.......##.....##.##.....##.########...######..######....######.
              .......##.......##.....##.##.....##.##...##.........##.##.............##
              .......##....##.##.....##.##.....##.##....##..##....##.##.......##....##
              ........######...#######...#######..##.....##..######..########..######.
              */
                />
                </div>
            </main>

     <Foorter 
     /*
     .########..#######...#######..########.########.########.
     .##.......##.....##.##.....##....##....##.......##.....##
     .##.......##.....##.##.....##....##....##.......##.....##
     .######...##.....##.##.....##....##....######...########.
     .##.......##.....##.##.....##....##....##.......##...##..
     .##.......##.....##.##.....##....##....##.......##....##.
     .##........#######...#######.....##....########.##.....##
     */
      />
        </React.Fragment>
    );
};

export default Ciademy;
