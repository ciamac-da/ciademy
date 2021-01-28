import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from '../reducers/index';

export const store = createStore(reducers, compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
)


// Subscribe
store.subscribe(()=>console.log(store.getState()))