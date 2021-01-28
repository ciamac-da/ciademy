import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from '../reducers/index.jsx';
import { getAllCourses } from '../actions/courses';

export const store = createStore(reducers, compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
)


// Initialize
store.dispatch(getAllCourses())

// Subscribe
store.subscribe(() => console.log(store.getState()))