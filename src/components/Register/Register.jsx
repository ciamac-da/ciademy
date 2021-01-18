import React, {useState, useRef, useEffect} from "react";
import simpleValidator from "simple-react-validator";
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";
import { registerUser } from './../../services/userService';
import { Planets } from 'react-preloaders';
import Fade from 'react-reveal/Fade';
import Helmet from "react-helmet";
import Page from 'react-page-loading';

const Register = ({history}) => {

const[fullname ,  setFullname] = useState("");
const[email    ,  setEmail   ] = useState("");
const[password ,  setPassword] = useState("");
const[         ,  forceUpdate] = useState(  );
const[policy   ,    setPolicy] = useState(  );
const[loading  ,   setLoading] = useState(false);


const validator = useRef(
    new simpleValidator({
        messages:{
            required:"Please fill out this field!",
            min: "Required at least 6 characters!",
            email: "E-Mail is invalid",
            max: "Maximum 30 characters are allowed!"
        },
        element: message => <div 
        style={{
            color:"red",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            background: "white",
            fontSize: "16px",
            textShadow: "4px 0px 15px black",
            }}
            >{message}</div>
    }
));

/* useEffect(()=>{
    document.title = "Ciademy / Register"
},[]) */


const reset = () =>{
    setFullname("");
    setEmail("");
    setPassword("");
}

const handleSubmit = async event =>{
    event.preventDefault();
    //alert("Submitted!")
    const user ={
        fullname,
        email,
        password
    };
    
  try {
     if(validator.current.allValid()){
        setLoading(true);
        const {status} = await registerUser(user)
        if(status === 201){ 
            toast.success(`${fullname} is registered successfully!`, {
                position:"bottom-right", 
                closeOnClick: true
            });
            setLoading(false);
            history.push("/login");
            reset();
       }
     } else{
         validator.current.showMessages();
         // to render again I putted 1
         forceUpdate(1)
     }

  } catch(err) {
    toast.error("Something went wrong!",{
        position:"bottom-right",
        closeOnClick:true
    });
    console.log(err)
    setLoading(false);
    reset();
  }



  /*     .then(({data, status})=>{
        if(status === 201){ 
            toast.success("New User is registered successfully!", {
                position:"bottom-right", 
                closeOnClick: true
            });
            console.log(data)
            reset();
       }
       else if(status === 422){
           toast.info("This user is already exists!",{
            position:"bottom-right", 
            closeOnClick: true
           })
           console.log("user already exist")
           reset();
       }
    })
    .catch(err=>{
        toast.error("Something is wrong, try again!",{
            position:"bottom-right",
            closeOnClick:true
        });
        console.log(err)
        reset();

    });
console.log(user) */

};

    return (
        <>
        <main className="client-page">
        <Fade left>

            <div className="container-content">
            <header>
                <img src="https://img.icons8.com/ios/50/000000/security-user-male.png" className="myLogo"/>
                    <h2 className="h2">Register </h2>
                    </header>
                    <Helmet>
                        <title>Ciademy/Register</title>
                    </Helmet>
                    {loading ? (
                    <Planets time={3000} color="black" background="green" customLoading={loading} />
                ) : null}
               {/*  <Planets color="black" background="green" /> */}
                <div className="form-layer">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fullname"
                                name="fullname"
                                aria-describedby="username"
                                value={fullname}
                                onChange={e=>{
                                setFullname(e.target.value);
                                validator.current.showMessageFor("fullname")
                                }}
                                autoComplete="off"
                                required
                            />
                        </div>
                            {validator.current.message(
                                "fullname", 
                                fullname,
                                "required|min:6",
                                )}

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e=> {
                                setEmail(e.target.value);
                                validator.current.showMessageFor("email")
                                }
                                }
                                autoComplete="off"
                                required
                            />
                        </div>
                        {validator.current.message(
                            "email",
                             email,
                             "required|email"
                        )}

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                aria-describedby="password"
                                value={password}
                                name="password"
                                onChange={ e=>{
                                setPassword(e.target.value);
                                validator.current.showMessageFor("password")
                                }
                                }
                                autoComplete="off"
                                required
                            />
                        </div>
                            {validator.current.message(
                                "password",
                                 password,
                                "required|min:6|max:30"
                            )}

                        <div className="accept-rules">
                            <label>
                                <input 
                                type="checkbox" 
                                name="policy" 
                                value={policy}
                                onChange={e=>{
                                    setPolicy(e.currentTarget.checked);
                                    validator.current.showMessageFor("policy");
                                }
                                }
                                /> I accept the rules and regulations of the site!
                              {" "}
                            </label>
                        </div>
                        {validator.current.message(
                            "policy",
                             policy,
                             "required"
                        )}

                        <div className="link">
                            <a href="">
                                {" "}
                                <img src="https://img.icons8.com/ios-glyphs/24/000000/terms-and-conditions.png"/>
                                Terms and Conditions
                            </a>
                            <NavLink to="/login">
                                {" "}
                                <img src="https://img.icons8.com/material-sharp/24/000000/login-rounded-right.png"/>
                                
                                &nbsp;&nbsp;Login
                                {" "}
                            </NavLink>
                        </div>
                        <div className="myBtn">
                        <button className="btn btn-light myBtn2">
                             {" "}
                             &nbsp;&nbsp;Register                            
                            {" "}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fade>
        </main>
        </>
    );
};

export default Register;
