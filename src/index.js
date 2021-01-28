import React from "react";
import { render } from "react-dom";
import App from './containers/App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "./store";



render(
    <Provider>
      <App store={store}/>
    </Provider>
, document.getElementById("root"));


//"homepage": "http://ciamac-da.github.io/ciademy",
