import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import { loginUser } from '../../sevices/userService';
import { toast } from 'react-toastify';
const Login = () => {

const [email, setEmail]= useState("");
const [password, setPassword]= useState("");

const reset = () =>{
    setEmail("");
    setPassword("");
}
const handleSubmit = async event =>{
    event.preventDefault();

    const user ={email, password}

try{
const {status,data} = await loginUser(user)
if(status === 200){
    toast.success("User logged in successfully!", {
        position:"bottom-right", 
        closeOnClick: true
    });
    console.log(data)
    reset();
}
} catch(err){
console.log(err);
}

}

    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                <img src="https://img.icons8.com/ios/50/000000/security-user-male.png" className="myLogo"/>
                    <h2 className="h2">Login </h2>
                </header>

                <div className="form-layer">
                    <form onSubmit={handleSubmit}>
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
                                placeholder="Email Address"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                                autoComplete="off"
                                required

                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password "
                                aria-describedby="password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                                autoComplete="off"
                                required
                            />
                        </div>

                        <div className="remember-me">
                            <label>
                                <input type="checkbox" name="" /> &nbsp;&nbsp; Remember&nbsp;&nbsp;Me{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <img src="https://img.icons8.com/ios-filled/24/000000/sign-in-form-password.png"/>
                                &nbsp;&nbsp;Password&nbsp;&nbsp;Forgot
                            </a>
                            <NavLink to="/register">
                                {" "}
                                <img src="https://img.icons8.com/material-sharp/24/000000/login-rounded-right.png"/>
                                
                                 &nbsp;&nbsp;Register
                               {" "}
                            </NavLink>
                        </div>
                        <div className="myBtn">
                            {" "}
                        <button className="btn btn-light myBtn2">
                            Login{" "}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
