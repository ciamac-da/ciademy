import React from 'react';
import Ciademy from './Ciademy';
import {BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
const App = () => {
    return (  
        <BrowserRouter>
        <Ciademy />
        <ToastContainer/>
        </BrowserRouter>
    );
}
 
export default App;