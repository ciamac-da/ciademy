import React, {useState, useRef} from "react";
import simpleReactValidator from "simple-react-validator";
import { NavLink, withRouter, Redirect } from 'react-router-dom';
import { loginUser } from '../../sevices/userService';
import { toast } from 'react-toastify';
const Login = ({history}) => {

const [email    , setEmail    ] = useState("");
const [password , setPassword ] = useState("");
const [         ,  forceUpdate] = useState(  );



const validator = useRef(new simpleReactValidator(
    {
        messages:{
            required:"Please    fill out this field",
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


const reset = () =>{
    setEmail("");
    setPassword("");
}
const handleSubmit = async event =>{
    event.preventDefault();

    const user ={email, password}

try{
if(validator.current.allValid()){
    const {status,data} = await loginUser(user)
if(status === 200){
    toast.success("User logged in successfully!", {
        position:"bottom-right", 
        closeOnClick: true
    });
    console.log(data)
    localStorage.setItem("token", data.token)
    history.replace("/");
    reset();
}
}else{
    validator.current.showMessages();
    forceUpdate(1);
}
} catch(err){
    toast.error("Something is wrong",{
        position:"bottom-right",
        closeOnClick:true
    });
    console.log(err)
    reset();
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
                                name="email"
                                onChange={e=>{
                                 setEmail(e.target.value)
                                 validator.current.showMessageFor("email")
                                 }
                                }
                                autoComplete="off"
                              //  required
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
                                type="text"
                                className="form-control"
                                placeholder="Password "
                                aria-describedby="password"
                                value={password}
                                name="password"
                                onChange={e=> {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor("password");
                                }
                                }
                                autoComplete="off"
                                //required
                            />
                        </div>
                        {validator.current.message(
                            "password",
                            password,
                            "required|min:6|max:30"
                        )}
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

export default withRouter(Login);
