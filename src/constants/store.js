import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "../constants/reducers";
import thunk from "redux-thunk";

export default createStore(todoReducer, applyMiddleware(thunk));