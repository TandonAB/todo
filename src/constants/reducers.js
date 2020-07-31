import { ADD_TO_CART, ADD_TODOS } from "./actions";

function todoReducer (state = { cart: [], todos: [] }, action) {
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, todos: [action.payload] }

    case ADD_TO_CART:
      return { cart: [...state.cart, action.payload] };

    default:
      return state;
  }
}

export default todoReducer;