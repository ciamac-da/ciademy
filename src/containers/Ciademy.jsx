import React from "react";
import Courses from '../components/Courses/Courses.jsx';
import MainLayout from '../components/Layouts/MainLayout.jsx';
import Login from "../components/Login/Login";


const Ciademy = props => {
    return (
        <React.Fragment>
              <MainLayout>
                <Courses 
              /*
              ........######...#######..##.....##.########...######..########..######.
              .......##....##.##.....##.##.....##.##.....##.##....##.##.......##....##
              .......##.......##.....##.##.....##.##.....##.##.......##.......##......
              .......##.......##.....##.##.....##.########...######..######....######.
              .......##.......##.....##.##.....##.##...##.........##.##.............##
              .......##....##.##.....##.##.....##.##....##..##....##.##.......##....##
              ........######...#######...#######..##.....##..######..########..######.
              */
                />
                <Login 
                 /*
                 ....##........#######...######...####.##....##
                 ....##.......##.....##.##....##...##..###...##
                 ....##.......##.....##.##.........##..####..##
                 ....##.......##.....##.##...####..##..##.##.##
                 ....##.......##.....##.##....##...##..##..####
                 ....##.......##.....##.##....##...##..##...###
                 ....########..#######...######...####.##....##
                 */
                />
                </MainLayout>
              </React.Fragment>
          );
};

export default Ciademy;
