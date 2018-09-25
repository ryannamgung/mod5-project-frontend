import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import logo from '../assets/svg/logo.svg';
import '../assets/css/App.css';
import {fetchUsers} from "../action.js"
import {connect} from "react-redux"
import UserList from "./UserList.js"
import ItemList from "./ItemList.js"
import NavBar from "./NavBar.js"
import {fetchItems} from "../action.js"
import {fetchCompanies} from "../action.js"
import CompanyList from "./CompanyList.js"
import ReviewList from "./ReviewList.js"
import {fetchReviews} from '../action.js'
import CategoryList from "./CategoryList"

class App extends Component {
  componentDidMount(){
    this.props.fetchUsers()
    this.props.fetchItems()
    this.props.fetchCompanies()
    this.props.fetchReviews()
    // fetch('http://localhost:3000/api/v1/users').then(res => res.json()).then(json => console.log(json))
  }
  // <center><h1>MY COMPANY NAME</h1></center>

  render() {
    // console.log("props are", this.props)
    return (
      <div className="app-container">
        <NavBar user={this.props.currentUser}/>
        <UserList users={this.props.users}/>
        <ItemList items={this.props.items}/>
        <CompanyList companies={this.props.companies}/>
        <ReviewList reviews={this.props.reviews}/>
        <CategoryList {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  // debugger
  console.log("state is ", state)
  console.log()
  // debugger
  return {
    users: state.userReducer.users,
    currentUser: state.userReducer.currentUser,
    items: state.itemReducer.items,
    reviews: state.reviewReducer.reviews,
    companies: state.companyReducer.companies
  }
}

function mapDispatchToProps(dispatch){
  // debugger
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchItems: () => dispatch(fetchItems()),
    fetchCompanies: () => dispatch(fetchCompanies()),
    fetchReviews: () => dispatch(fetchReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
