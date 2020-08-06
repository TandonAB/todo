import { createStore, applyMiddleware, compose } from "redux";
import { todoReducer } from "../constants/reducers";
import thunk from "redux-thunk";
import { composeWithDevtools } from 'redux-devtools-extension';

export default createStore(todoReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));