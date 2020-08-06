import baseUri from './baseUri';

import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TODOS, GET_TODOS } from './constants';


export const addToCart = (cart) => async (dispatch) => {
  try {
    console.log("HI", cart)
    return { type: ADD_TO_CART, payload: cart }
  } catch (error) {
    console.log(error.response)
  }
}

export const removeFromCart = (cart) => async (dispatch) => {
  try {
    console.log("HI", cart)
    return { type: REMOVE_FROM_CART, payload: cart }
  } catch (error) {
    console.log(error.response)
  }
}

export const addTodos = () => async (dispatch) => {
  try {
    const res = await baseUri.get('/todos');
    dispatch({ type: ADD_TODOS, payload: res.data })
  } catch (error) {
    console.log(error.response);
  }
}

export const getTodo = (id) => async (dispatch) => {
  try {
    const res = await baseUri.get(`/todos/${id}`);
    dispatch({ type: GET_TODOS, payload: res.data })
  } catch (error) {
    console.log(error.response)
  }
}

