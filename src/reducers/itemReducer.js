const defaultState = {items: [], cart: []}

export default function itemReducer(state = defaultState, action){
  // debugger
  switch(action.type){
    case "GET_ITEMS":
      // console.log("Passing in ", {...state, items: action.payload})
      return {...state, items: action.payload}
    case "ADD_TO_CART":
      // console.log(action.payload)
      // console.log(state)
      // debugger
      return {...state, cart: [...state.cart, action.payload]}
    case "REMOVE_FROM_CART":
    // debugger
      return {...state, cart: [...state.cart.filter(item => item != action.payload)]}
    default:
      return state;
  }
}
