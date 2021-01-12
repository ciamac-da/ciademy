import React from 'react';

const AllCourses = () => {
    return ( 
        <>
       <section className="term-categories">
            <div className="top-bar">
                <header className="myHeader">
                    <h1>
                        {" "}
                        <span> Web Development Courses  </span>{" "}
                    </h1>{" "}
                    <span> Courses 1 2 3 </span>
                </header>

                <div className="row">
                   
                    <div className="col-md-4 col-sm-6 col-xs-12 pull-right">
                        <div className="switch-field available">
                            <input
                                id="available-filter-1"
                                name="available"
                                value="all"
                                checked=""
                                type="radio"
                            />
                            <label for="available-filter-1"> All </label>
                            <input
                                id="available-filter-2"
                                name="available"
                                value="off"
                                type="radio"
                            />
                            <label for="available-filter-2"> Buyable</label>
                            <input
                                id="available-filter-3"
                                name="available"
                                value="normal"
                                type="radio"
                            />
                            <label for="available-filter-3"> Free </label>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12 pull-left">
                        <form action="" method="">
                            <div className="input">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="موضوع مورد نظر ..."
                                />
                                <button>
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className="col-md-4 col-sm-6 col-xs-12 pull-right">
                        <div className="select-ddl">
                            <select>
                                <option> Sort </option>
                                <option> Price</option>
                                <option> Release Date</option>
                            </select>
                        </div>
                    </div>
                
                
                </div>
            </div>

            <div className="row">
                <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <section className="aside-section filter-by-category">
                        <header>
                            <h3> Topics </h3>
                        </header>
                        <div className="inner">
                            <ul>
                                <li>
                                    <input type="checkbox" name="" id="cat-1" />
                                    <label for="cat-1"> Mobile App Development </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-2" />
                                    <label for="cat-2">
                                        {" "}
                                    Windows Programming{" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-3" />
                                    <label for="cat-3"> Web Development </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-4" />
                                    <label for="cat-4">
                                        {" "}
                                        Web Design
                                        {" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-5" />
                                    <label for="cat-5"> Database </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-6" />
                                    <label for="cat-6">
                                        {" "}
                                        SEO
                                        {" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-7" />
                                    <label for="cat-7"> 
                                    Operation System                                    
                                     </label>
                                </li>
                            </ul>
                        </div>
                    </section>
                </aside>

                <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                    <section className="terms-items">
                        <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
/*
....##.....##....###....########.########.########..####....###....##...............##.....##.####
....###...###...##.##......##....##.......##.....##..##....##.##...##...............##.....##..##.
....####.####..##...##.....##....##.......##.....##..##...##...##..##...............##.....##..##.
....##.###.##.##.....##....##....######...########...##..##.....##.##.......#######.##.....##..##.
....##.....##.#########....##....##.......##...##....##..#########.##...............##.....##..##.
....##.....##.##.....##....##....##.......##....##...##..##.....##.##...............##.....##..##.
....##.....##.##.....##....##....########.##.....##.####.##.....##.########..........#######..####
*/
 >
       <article>
           <a href="" className="img-layer cardImage">
               <img src="images/pic/mat.png" />
           </a>
           <h2>
           <a target="_blank" href="https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/">
                   {" "}
               Material UI{" "}
               </a>
           </h2>
           <span>Free </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
 /*
 .......########..########....###.....######..########.......##..######.
 .......##.....##.##.........##.##...##....##....##..........##.##....##
 .......##.....##.##........##...##..##..........##..........##.##......
 .......########..######...##.....##.##..........##..........##..######.
 .......##...##...##.......#########.##..........##....##....##.......##
 .......##....##..##.......##.....##.##....##....##....##....##.##....##
 .......##.....##.########.##.....##..######.....##.....######...######.
 */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/reactjs.png" />
           </a>
           <h2>
           <a target="_blank" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
               
                   {" "}
               ReactJs{" "}
               </a>
           </h2>
           <span> 299$ USD  </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
 /*
 .......########..########....###.....######..########....##....##....###....########.####.##.....##.########
 .......##.....##.##.........##.##...##....##....##.......###...##...##.##......##.....##..##.....##.##......
 .......##.....##.##........##...##..##..........##.......####..##..##...##.....##.....##..##.....##.##......
 .......########..######...##.....##.##..........##.......##.##.##.##.....##....##.....##..##.....##.######..
 .......##...##...##.......#########.##..........##.......##..####.#########....##.....##...##...##..##......
 .......##....##..##.......##.....##.##....##....##.......##...###.##.....##....##.....##....##.##...##......
 .......##.....##.########.##.....##..######.....##.......##....##.##.....##....##....####....###....########
 */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/reactn.jpeg" />
           </a>
           <h2>
           <a target="_blank" href="https://www.udemy.com/course/the-complete-react-native-and-redux-course/">
                   {" "}
                  React Native{" "}
               </a>
           </h2>
           <span> 149$ USD  </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ..........##....###....##.....##....###.....######...######..########..####.########..########
  ..........##...##.##...##.....##...##.##...##....##.##....##.##.....##..##..##.....##....##...
  ..........##..##...##..##.....##..##...##..##.......##.......##.....##..##..##.....##....##...
  ..........##.##.....##.##.....##.##.....##..######..##.......########...##..########.....##...
  ....##....##.#########..##...##..#########.......##.##.......##...##....##..##...........##...
  ....##....##.##.....##...##.##...##.....##.##....##.##....##.##....##...##..##...........##...
  .....######..##.....##....###....##.....##..######...######..##.....##.####.##...........##...
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/JS.jpeg" />
           </a>
           <h2>
           <a target="_blank" href="https://www.udemy.com/course/the-complete-javascript-course/">
                   {" "}
                   JavaScript{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ....########.##....##.########..########..######...######..########..####.########..########
  .......##.....##..##..##.....##.##.......##....##.##....##.##.....##..##..##.....##....##...
  .......##......####...##.....##.##.......##.......##.......##.....##..##..##.....##....##...
  .......##.......##....########..######....######..##.......########...##..########.....##...
  .......##.......##....##........##.............##.##.......##...##....##..##...........##...
  .......##.......##....##........##.......##....##.##....##.##....##...##..##...........##...
  .......##.......##....##........########..######...######..##.....##.####.##...........##...
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/ttt.jpg" />
           </a>
           <h2>
           <a target="_blank" href="https://www.udemy.com/course/understanding-typescript/">
                   {" "}
                  Typesript{" "}
               </a>
           </h2>
           <span> 149$ USD  </span>
       </article>
   </div>
   

   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
 /*
 .......##.....##..#######..##....##..######....#######..########..########.
 .......###...###.##.....##.###...##.##....##..##.....##.##.....##.##.....##
 .......####.####.##.....##.####..##.##........##.....##.##.....##.##.....##
 .......##.###.##.##.....##.##.##.##.##...####.##.....##.##.....##.########.
 .......##.....##.##.....##.##..####.##....##..##.....##.##.....##.##.....##
 .......##.....##.##.....##.##...###.##....##..##.....##.##.....##.##.....##
 .......##.....##..#######..##....##..######....#######..########..########.
 */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/mongodb.jpg" />
           </a>
           <h2>
           <a target="_blank"  href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/">
                   {" "}
                  MongoDB{" "}
               </a>
           </h2>
           <span> 149$ USD  </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ....##....##..#######..########..########..........##..######.
  ....###...##.##.....##.##.....##.##................##.##....##
  ....####..##.##.....##.##.....##.##................##.##......
  ....##.##.##.##.....##.##.....##.######............##..######.
  ....##..####.##.....##.##.....##.##..........##....##.......##
  ....##...###.##.....##.##.....##.##..........##....##.##....##
  ....##....##..#######..########..########.....######...######.
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/nodejs.png" />
           </a>
           <h2>
           <a target="_blank"  href="https://www.udemy.com/course/nodejs-the-complete-guide/">
                   {" "}
                   NodeJs{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ....########...#######...#######..########..######..########.########.....###....########.
  ....##.....##.##.....##.##.....##....##....##....##....##....##.....##...##.##...##.....##
  ....##.....##.##.....##.##.....##....##....##..........##....##.....##..##...##..##.....##
  ....########..##.....##.##.....##....##.....######.....##....########..##.....##.########.
  ....##.....##.##.....##.##.....##....##..........##....##....##...##...#########.##.......
  ....##.....##.##.....##.##.....##....##....##....##....##....##....##..##.....##.##.......
  ....########...#######...#######.....##.....######.....##....##.....##.##.....##.##.......
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/boostrap_img.png" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/">
                   {" "}
                   Bootstrap{" "}
               </a>
           </h2>
           <span> Free</span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
 /*
 .......##.....##.########.##.....##.##.............##..######...######...######.
 .......##.....##....##....###...###.##............##..##....##.##....##.##....##
 .......##.....##....##....####.####.##...........##...##.......##.......##......
 .......#########....##....##.###.##.##..........##....##........######...######.
 .......##.....##....##....##.....##.##.........##.....##.............##.......##
 .......##.....##....##....##.....##.##........##......##....##.##....##.##....##
 .......##.....##....##....##.....##.########.##........######...######...######.
 */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/HTMLCSS.jpg" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/">
                   {" "}
                   HTML/CSS{" "}
               </a>
           </h2>
           <span> Free </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
   /*
   .##.....##.########.########..##....##
   .###...###.##.......##.....##.###...##
   .####.####.##.......##.....##.####..##
   .##.###.##.######...########..##.##.##
   .##.....##.##.......##...##...##..####
   .##.....##.##.......##....##..##...###
   .##.....##.########.##.....##.##....##
   */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/mern.jpg" />
           </a>
           <h2>
           <a arget="_blank" href="https://www.udemy.com/course/mern-stack-front-to-back/">
                   {" "}
                   MERN{" "}
               </a>
           </h2>
           <span> 399$ USD  </span>
       </article>
   </div>


       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
      /*
      ....########..##....##.########.##.....##..#######..##....##
      ....##.....##..##..##.....##....##.....##.##.....##.###...##
      ....##.....##...####......##....##.....##.##.....##.####..##
      ....########.....##.......##....#########.##.....##.##.##.##
      ....##...........##.......##....##.....##.##.....##.##..####
      ....##...........##.......##....##.....##.##.....##.##...###
      ....##...........##.......##....##.....##..#######..##....##
      */
       >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/py.jpg" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/python-the-complete-python-developer-course/">
                   {" "}
                   Python{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
 /*
 .......##.....##.##.....##.########..........##..######.
 .......##.....##.##.....##.##................##.##....##
 .......##.....##.##.....##.##................##.##......
 .......##.....##.##.....##.######............##..######.
 ........##...##..##.....##.##..........##....##.......##
 .........##.##...##.....##.##..........##....##.##....##
 ..........###.....#######..########.....######...######.
 */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/vuejs.png" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/vuejs-2-the-complete-guide/">
                   {" "}
                   VueJs{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  .......###....##....##..######...##.....##.##..........###....########.
  ......##.##...###...##.##....##..##.....##.##.........##.##...##.....##
  .....##...##..####..##.##........##.....##.##........##...##..##.....##
  ....##.....##.##.##.##.##...####.##.....##.##.......##.....##.########.
  ....#########.##..####.##....##..##.....##.##.......#########.##...##..
  ....##.....##.##...###.##....##..##.....##.##.......##.....##.##....##.
  ....##.....##.##....##..######....#######..########.##.....##.##.....##
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/Angular.png" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/the-complete-guide-to-angular-2/">
                   {" "}
                   Angular{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  .....######...............
  ....##....##...##.....##..
  ....##.........##.....##..
  ....##.......######.######
  ....##.........##.....##..
  ....##....##...##.....##..
  .....######...............
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/cpp.jpg" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/unrealcourse/">
                   {" "}
                   C++{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>

   
   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  .......###.....######..########......##....##.########.########
  ......##.##...##....##.##.....##.....###...##.##..........##...
  .....##...##..##.......##.....##.....####..##.##..........##...
  ....##.....##..######..########......##.##.##.######......##...
  ....#########.......##.##............##..####.##..........##...
  ....##.....##.##....##.##........###.##...###.##..........##...
  ....##.....##..######..##........###.##....##.########....##...
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/ASP-NET.png" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/the-complete-aspnet-mvc-5-course/">
                   {" "}
                  ASP.NET{" "}
               </a>
           </h2>
           <span> 149$ USD  </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ..........##....###....##.....##....###...
  ..........##...##.##...##.....##...##.##..
  ..........##..##...##..##.....##..##...##.
  ..........##.##.....##.##.....##.##.....##
  ....##....##.#########..##...##..#########
  ....##....##.##.....##...##.##...##.....##
  .....######..##.....##....###....##.....##
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/java.jpg" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/java-the-complete-java-developer-course/">
                   {" "}
                   Java{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>
  

   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
   /*
   ..######....##.##..
   .##....##...##.##..
   .##.......#########
   .##.........##.##..
   .##.......#########
   .##....##...##.##..
   ..######....##.##..
   */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/csharp.jpg" />
           </a>
           <h2>
               <a  target="_blank" href="https://www.udemy.com/course/csharp-tutorial-for-beginners/">
                   {" "}
                   C#{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>

   
   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ....##.....##....###....##.....##....###....########..####.##....##
  .....##...##....##.##...###...###...##.##...##.....##..##..###...##
  ......##.##....##...##..####.####..##...##..##.....##..##..####..##
  .......###....##.....##.##.###.##.##.....##.########...##..##.##.##
  ......##.##...#########.##.....##.#########.##...##....##..##..####
  .....##...##..##.....##.##.....##.##.....##.##....##...##..##...###
  ....##.....##.##.....##.##.....##.##.....##.##.....##.####.##....##
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/xamarin.jpg" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/xamarin-forms-course/">
                   {" "}
                  Xamarin{" "}
               </a>
           </h2>
           <span> 149$ USD  </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ....########..##.....##.########.
  ....##.....##.##.....##.##.....##
  ....##.....##.##.....##.##.....##
  ....########..#########.########.
  ....##........##.....##.##.......
  ....##........##.....##.##.......
  ....##........##.....##.##.......
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/php.png" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/">
                   {" "}
                   PHP{" "}
               </a>
           </h2>
           <span> 199$ USD </span>
       </article>
   </div>


   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
  /*
  ....########...#######...######..##....##.########.########.
  ....##.....##.##.....##.##....##.##...##..##.......##.....##
  ....##.....##.##.....##.##.......##..##...##.......##.....##
  ....##.....##.##.....##.##.......#####....######...########.
  ....##.....##.##.....##.##.......##..##...##.......##...##..
  ....##.....##.##.....##.##....##.##...##..##.......##....##.
  ....########...#######...######..##....##.########.##.....##
  */
   >
       <article>
           <a href="" className="img-layer">
               <img src="images/pic/docker.png" />
           </a>
           <h2>
               <a target="_blank" href="https://www.udemy.com/course/docker-mastery/">
                   {" "}
                   Docker{" "}
               </a>
           </h2>
           <span> 99$ USD </span>
       </article>
   </div>
                        </div>

                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <i className="zmdi zmdi-chevron-right"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">
                                            <i className="zmdi zmdi-chevron-left"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </div>
        </section>
        </>
                    );
}
 
export default AllCourses;