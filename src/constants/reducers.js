import { ADD_TO_CART, ADD_TODOS, GET_TODOS } from "./actions";

const initialState = {
  loading: false,
  todos: [],
  todo: {},
  cart: [],
}

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, todos: action.payload, loading: false }

    case GET_TODOS:
      return { todo: action.payload, loading: false }

    case ADD_TO_CART:
      return { cart: [...state.cart, action.payload] };

    default:
      return state;
  }
}

export default todoReducer;