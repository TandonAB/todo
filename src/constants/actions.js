import axios from 'axios';

export const ADD_TO_CART = 'ADD_TO_CART' // action types
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART' // action types
export const ADD_TODOS = 'ADD_TODOS' // action types
export const GET_TODOS = 'GET_TODOS' // action types


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
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({ type: ADD_TODOS, payload: res.data })
  } catch (error) {
    console.log(error.response);
  }
}

export const getTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({ type: GET_TODOS, payload: res.data })
  } catch (error) {
    console.log(error.response)
  }
}

