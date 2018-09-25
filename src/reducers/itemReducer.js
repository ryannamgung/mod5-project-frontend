const defaultState = {items: []}

export default function itemReducer(state = defaultState, action){
  // debugger
  switch(action.type){
    case "GET_ITEMS":
      // console.log("Passing in ", {...state, items: action.payload})
      return {...state, items: action.payload}
    default:
      return state;
  }
}
