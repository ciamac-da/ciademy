import React from 'react';

const Header = () => {
    return ( 
        <React.Fragment>
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
                                className="myInput"
                                type="text"
                                name=""
                                placeholder="What do you want to Learn?"
                            />
                            <button>
                                <i className="zmdi zmdi-search"></i>
                            </button>
                        </form>
                    </div>
        </React.Fragment>
     );
}
 
export default Header;