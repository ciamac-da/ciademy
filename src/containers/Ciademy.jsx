import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Course from '../components/Course/Course.jsx';
import Archive from "../components/Course/Archive";
import MainLayout from '../components/Layouts/MainLayout.jsx';
import Login from "../components/Login/Login";
import Register from '../components/Register/Register';
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearUser } from './../actions/user.jsx';
import { decodeToken } from '../utils/decodeToken';
import { paginate } from '../utils/paginate';
import Logout from '../components/Login/Logout';
import PageNotFound from "./../components/common/404.jsx";
import UserProfile from '../components/Profile/UserProfile';
import { isEmpty } from "lodash";



const Ciademy = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = decodeToken(token);
        const dateNow = Date.now() / 1000;

        if (decodedToken.payload.exp < dateNow){
          localStorage.removeItem("token");
          dispatch(clearUser());
        }else dispatch(addUser(decodedToken.payload.user));
    }
}, []);



    return (
        <React.Fragment>
              <MainLayout>
              <Switch>
                <Route path="/login" component={Login}></Route>
                <Route
                    path="/logout"
                    render={() =>
                        isEmpty(user) ? <Redirect to="/" /> : <Logout />
                    }
                />
                <Route path="/register" component={Register}></Route>
                <Route path="/allcourses" component={Archive}></Route>
                <Route path="/user-profile" component={UserProfile} />
                <Route path="/" exact component={Course}></Route>
                <Route                 component={PageNotFound}     /> 
                <Route path="*" exact  component={PageNotFound}     />
              </Switch>
                </MainLayout>
              </React.Fragment>
          );
};

export default Ciademy;
