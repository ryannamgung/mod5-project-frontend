const defaultState = {companies: []}
//default reducer
// function reducer(state, action){
//   switch(action.type){
//     default:
//       return state;
//   }
// }


export default function companyReducer(state = defaultState, action){
  switch(action.type){
    case "GET_COMPANIES":
      return {...state, companies: action.payload}
    default:
      return state;
  }
}
