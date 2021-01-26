import React from 'react';
import Ciademy from './Ciademy';
import {BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import $ from "jquery"

const App = () => {

useEffect(()=>{
  require("../utils/script")
},[])



    return (  
        <BrowserRouter>
        <Ciademy />
        <ToastContainer/>
        </BrowserRouter>
    );
}
 
export default App;