const defaultState = {reviews: []}
//default reducer
// function reducer(state, action){
//   switch(action.type){
//     default:
//       return state;
//   }
// }


export default function reviewReducer(state = defaultState, action){
  // debugger
  switch(action.type){
    case "GET_REVIEW":
      console.log("Passing in ", {...state, items: action.payload})
      return {...state, reviews: action.payload}
    default:
      return state;
  }
}
