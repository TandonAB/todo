import { ADD_TO_CART, ADD_TODOS, GET_TODOS } from './constants';

const initialState = {
  loading: false,
  todos: [],
  todo: {},
  cart: [{
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": true
  },],
}

export const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, todos: action.payload, loading: false }

    case GET_TODOS:
      return { todo: action.payload, loading: false }

    case ADD_TO_CART:
      console.log("caart")
      return { cart: [...state.cart, action.payload] };

    default:
      return state;
  }
}
