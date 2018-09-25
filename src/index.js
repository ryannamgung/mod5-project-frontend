import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'

import store from "./store"
import App from './components/App';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

// <Router>

// </Router>
/*
  1. Create a reducer
  2. Create a store
  3. Setup your provider
*/
