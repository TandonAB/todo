
export const ADD_TO_CART = 'ADD_TO_CART' // action types
export const ADD_TODOS = 'ADD_TODOS' // action types

export function addToCart (cart) {
  return { type: ADD_TO_CART, cart }
}

export function addTodos (todos) {
  return { type: ADD_TODOS, todos }
}