const defaultState = {users: []}

function reducer(state, action){
  switch(action.type){
    default: 
      return state;
  }
}


export default function userReducer(state = defaultState, action){
  switch(action.type){
    case "GET_USERS":
      // debugger
      return {...state, users: action.payload}
    default:
      return state;
  }
}
