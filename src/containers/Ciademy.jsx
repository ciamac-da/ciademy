import React from "react";
import {Switch, Route} from "react-router-dom";
import Courses from '../components/Courses/Courses.jsx';
import MainLayout from '../components/Layouts/MainLayout.jsx';
import Login from "../components/Login/Login";
import Register from '../components/Register/Register';


const Ciademy = props => {
    return (
        <React.Fragment>
              <MainLayout>
              <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/" exact component={Courses}></Route>
              </Switch>
                </MainLayout>
              </React.Fragment>
          );
};

export default Ciademy;
