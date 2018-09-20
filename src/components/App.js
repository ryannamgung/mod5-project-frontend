import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import '../assets/css/App.css';
import {fetchUsers} from "../action.js"
import {connect} from "react-redux"

class App extends Component {
  componentDidMount(){
    console.log(this.props.fetchUsers())
    this.props.fetchUsers()
    console.log("Pass count")
    // fetch('http://localhost:3000/api/v1/users').then(res => res.json()).then(json => console.log(json))
  }
  render() {
    return (
      <h1>renders properly</h1>
    );
  }
}

function mapStateToProps(state){
  // debugger
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
