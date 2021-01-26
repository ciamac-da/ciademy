import React from 'react';
import Ciademy from './Ciademy';
import {BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import $ from "jquery"

const App = () => {

useEffect(()=>{
    var windowSize = $(window).width();
    if(windowSize <= 991)
    {
        $(".caret-icon").remove();
        $('.main-menu nav > ul > li').each(function(){
            if($(this).find('ul').length > 0) {
                $(this).append("<span class='caret-icon'><i class='zmdi zmdi-chevron-down'></i></span>");
            } 
        });
        $('.main-menu nav > ul > li > .caret-icon').click(function(){
            $(this).parent().find('ul').slideToggle();
        });

    } else {
        
        $('.main-menu nav > ul > li').hover(
            function() {
                $(this).find('ul').fadeIn('fast');
            },
            function(){
                $(this).find('ul').fadeOut('fast');
            }
        );
        }
},[])



    return (  
        <BrowserRouter>
        <Ciademy />
        <ToastContainer/>
        </BrowserRouter>
    );
}
 
export default App;