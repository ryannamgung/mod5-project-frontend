export function fetchUsers(){
  // debugger
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/users').then(res => res.json()).then(json => dispatch({type: "GET_USERS", payload: json}))
  }
}


export function fetchItems(){
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/items').then(res => res.json()).then(json => dispatch({type: "GET_ITEMS", payload: json}))
  }
}

export function fetchCompanies(){
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/companies').then(res => res.json()).then(json => dispatch({type: "GET_COMPANIES", payload: json}))
  }
}

export function fetchReviews(){
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/reviews').then(res => res.json()).then(json => dispatch({type: "GET_REVIEW", payload: json}))
  }
}

export function addToCart(item){
  return{
    type: 'ADD_TO_CART',
    payload: item
  }
}

export function removeFromCart(item){
  return{
    type: 'REMOVE_FROM_CART',
    payload: item
  }
}
