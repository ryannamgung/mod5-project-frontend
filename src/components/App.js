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
import UUID from 'uuid';
import SpecificCategory from "./SpecificCategory.js"
import { connect } from 'react-redux'

// import logo from '../assets/svg/logo.svg';
// import '../assets/css/App.css';
// import {connect} from "react-redux"
// import {fetchCompanies} from "../action.js"
// import {fetchReviews} from '../action.js'

//do the links dynamically
class App extends React.Component{

  unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  render(){
    var uniqueCategories = Array.from(new Set(this.props.items)).map(item => item.good_type)
    const categoryArray = uniqueCategories.filter(this.unique)
    const categoryNames = categoryArray.map(category => {return <Route exact path={`/category-${category}`} component={SpecificCategory} />})


    return(
      <div className="app-container">
        <NavBar />
        <Switch>
        <Route exact path="/" render={() => <Redirect to="/homepage"/>}/>
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/all-items" component={ItemList} />
        <Route exact path="/all-companies" component={CompanyList} />
        {categoryNames}
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    items: state.itemReducer.items,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchItems: () => dispatch(fetchItems()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


// class App extends Component {
//   componentDidMount(){
//     // this.props.fetchUsers()
//     // this.props.fetchItems()
//     // this.props.fetchCompanies()
//     // this.props.fetchReviews()
//     // fetch('http://localhost:3000/api/v1/users').then(res => res.json()).then(json => console.log(json))
//   }
//   // <center><h1>MY COMPANY NAME</h1></center>
//
//   render() {
//     // console.log("props are", this.props)
//     // <UserList users={this.props.users}/>
//     //***********
//     // <div><center>Search By Categories <CategoryList {...this.props}/></center><hr/></div>
//     // <ItemList items={this.props.items}/>
//     // <CompanyList companies={this.props.companies}/>
//     // <ReviewList reviews={this.props.reviews}/>
//     return (
//       <div className="app-container">
//         <NavBar user={this.props.currentUser}/>
//         <Switch>
//         <Route exact path="/" render={() => <Redirect to="/homepage"/>}/>
//         <Route exact path="/homepage" component={CategoryList} />
//         </Switch>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//   // debugger
//   console.log("state is ", state)
//   console.log()
//   // debugger
//   return {
//     users: state.userReducer.users,
//     currentUser: state.userReducer.currentUser,
//     items: state.itemReducer.items,
//     reviews: state.reviewReducer.reviews,
//     companies: state.companyReducer.companies
//   }
// }

// function mapDispatchToProps(dispatch){
//   // debugger
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//     fetchItems: () => dispatch(fetchItems()),
//     fetchCompanies: () => dispatch(fetchCompanies()),
//     fetchReviews: () => dispatch(fetchReviews())
//   }
// }
