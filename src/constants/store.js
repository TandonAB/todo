import { createStore, applyMiddleware } from "redux";
import todoCartReducer from "../constants/reducers";
import thunk from "redux-thunk";

export default createStore(todoCartReducer, applyMiddleware(thunk));