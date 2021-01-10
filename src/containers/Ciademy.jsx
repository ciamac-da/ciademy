import React from "react";
import {Switch, Route} from "react-router-dom";
import Courses from '../components/Courses/Courses.jsx';
import MainLayout from '../components/Layouts/MainLayout.jsx';
import Login from "../components/Login/Login";


const Ciademy = props => {
    return (
        <React.Fragment>
              <MainLayout>
              <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" exact component={Courses}></Route>
              </Switch>
                </MainLayout>
              </React.Fragment>
          );
};

export default Ciademy;
