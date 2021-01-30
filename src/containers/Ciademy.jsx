import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import Course from '../components/Course/Course.jsx';
import Archive from "../components/Course/Archive";
import MainLayout from '../components/Layouts/MainLayout.jsx';
import Login from "../components/Login/Login";
import Register from '../components/Register/Register';
import { useDispatch } from "react-redux";
import { addUser } from './../actions/user.jsx';
import { decodeToken } from '../utils/decodeToken';
import { paginate } from '../utils/paginate';
import Logout from '../components/Login/Logout';

const Ciademy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = decodeToken(token);
        const dateNow = Date.now() / 1000;

        if (decodedToken.payload.exp < dateNow)
            localStorage.removeItem("token");
        else dispatch(addUser(decodedToken.payload.user));
    }
}, []);



    return (
        <React.Fragment>
              <MainLayout>
              <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/logout" component={Logout}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/allcourses" component={Archive}></Route>
                <Route path="/" exact component={Course}></Route>
              </Switch>
                </MainLayout>
              </React.Fragment>
          );
};

export default Ciademy;
