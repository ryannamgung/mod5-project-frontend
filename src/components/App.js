import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import UserList from "./UserList.js"
import ItemList from "./ItemList.js"
import NavBar from "./NavBar.js"
import CompanyList from "./CompanyList.js"
import ReviewList from "./ReviewList.js"
import CategoryList from "./CategoryList"
import HomePage from "./HomePage"
import {fetchItems} from "../action.js"
import {fetchReviews} from "../action.js"
import UUID from 'uuid';
import SpecificCategory from "./SpecificCategory.js"
import SpecificReview from "./SpecificReview.js"
import { connect } from 'react-redux'
import Checkout from "./Checkout.js"
import MyCart from "./MyCart.js"

//img width:"100%"
//look into slider

// import logo from '../assets/svg/logo.svg';
// import '../assets/css/App.css';
// import {connect} from "react-redux"
// import {fetchCompanies} from "../action.js"
// import {fetchReviews} from '../action.js'

class App extends React.Component{
  componentDidMount(){
    this.props.fetchReviews()
  }

  unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  render(){
    var uniqueCategories = Array.from(new Set(this.props.items)).map(item => item.good_type)
    const categoryArray = uniqueCategories.filter(this.unique)
    const categoryNames = categoryArray.map(category => {return <Route exact path={`/category-${category}`} component={SpecificCategory} />})

    const reviewArray = Array.from(new Set(this.props.reviews)).map(review => review)

    const reviewNames = reviewArray.map(review => {
      return <Route exact path={`/review-${review.item_id}`} component={SpecificReview} />
    })


    return(
      <div className="app-container">
        <NavBar />
        <Switch>
        <Route exact path="/" render={() => <Redirect to="/homepage"/>}/>
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/all-items" component={ItemList} />
        <Route exact path="/all-companies" component={CompanyList} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/my-cart" component={MyCart}/>
        {categoryNames}
        {reviewNames}
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    items: state.itemReducer.items,
    reviews: state.reviewReducer.reviews
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchReviews: () => dispatch(fetchReviews())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
