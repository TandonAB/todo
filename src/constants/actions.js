import axios from 'axios';

export const ADD_TO_CART = 'ADD_TO_CART' // action types
export const ADD_TODOS = 'ADD_TODOS' // action types
export const GET_TODOS = 'GET_TODOS' // action types

export function addToCart (cart) {
  return { type: ADD_TO_CART, cart }
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

