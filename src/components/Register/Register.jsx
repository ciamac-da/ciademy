import React, {useState} from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

const Register = () => {

const[fullname, setFullname]= useState("");
const[email, setEmail]= useState("");
const[password, setPassword]= useState("");


const reset = () =>{
    setFullname("");
    setEmail("");
    setPassword("");
}

const handleSubmit = event =>{
    event.preventDefault();
    //alert("Submitted!")
    const user ={
        fullname,
        email,
        password
    };
    
    axios.post("https://toplearnapi.ghorbany.dev/api/register",
    JSON.stringify(user),
    {
        headers:{
            "Content-Type":"application/json"
        }
    }
    )
    .then(({data, status})=>{
        if(status === 201){ 
            toast.success("New User is registered successfully!", {position:"bottom-left", closeOnClick: true}) 
            console.log(data)
            reset();
       }else if(status === 422){
           console.log("This user is already exists!")
       }
    })
    .catch(err=>{
        toast.error("Something is wrong!",{position:"top-center", closeOnClick:true})
        console.log(err)
    }
        )


};

    return (
        <>
        <main className="client-page">
            <div className="container-content">
            <header>
                <img src="https://img.icons8.com/ios/50/000000/security-user-male.png" className="myLogo"/>
                    <h2 className="h2">Register </h2>
                    </header>
                <div className="form-layer">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                aria-describedby="username"
                                value={fullname}
                                onChange={e=>setFullname(e.target.value)}
                                autoComplete="off"
                                required

                            />
                        </div>

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                autoComplete="off"
                                required

                            />
                        </div>

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
                                onChange={ e=>setPassword(e.target.value) }
                                autoComplete="off"
                                required

                            />
                        </div>

                        <div className="accept-rules">
                            <label>
                                <input type="checkbox" name="" />
                                 &nbsp;&nbsp;I 
                                 &nbsp;&nbsp;accept 
                                 &nbsp;&nbsp;the 
                                 &nbsp;&nbsp;rules 
                                 &nbsp;&nbsp;and 
                                 &nbsp;&nbsp;regulations 
                                 &nbsp;&nbsp;of 
                                 &nbsp;&nbsp;the 
                                 &nbsp;&nbsp;site! 
                              {" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <img src="https://img.icons8.com/ios-glyphs/24/000000/terms-and-conditions.png"/>
                                &nbsp;&nbsp;Terms 
                                &nbsp;&nbsp;and 
                                &nbsp;&nbsp;Conditions
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
        </main>
        </>
    );
};

export default Register;
