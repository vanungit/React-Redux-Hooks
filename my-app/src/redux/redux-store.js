import { applyMiddleware, combineReducers, createStore} from "redux";
import ListReducer from "./List-reducer";

import thunkMiddleware from "redux-thunk";
import { compose } from "redux";


let rootreducers = combineReducers({
    ListPage: ListReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootreducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;