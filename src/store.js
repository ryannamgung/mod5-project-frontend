import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './reducers/userReducer.js';
import authReducer from './reducers/authReducer.js'
import companyReducer from './reducers/companyReducer.js'
import itemReducer from './reducers/itemReducer.js'
import reviewReducer from './reducers/reviewReducer.js'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// , authReducer: authReducer
const reducer = combineReducers({ userReducer, authReducer, itemReducer, companyReducer, reviewReducer})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;
