export function fetchUsers(){
  return (dispatch) => {
    // debugger
    return fetch('http://localhost:3000/api/v1/users').then(res => res.json()).then(json => dispatch({type: "GET_USERS", payload: json}))
  }
}

//
// export function fetchCompanies(){
//   return (dispatch) => {
//     return fetch('http://localhost:3000/api/v1/users').then(res => res.json).then(json => dispatch({type: "GET_COMPANIES", payload: json}))
//   }
// }
