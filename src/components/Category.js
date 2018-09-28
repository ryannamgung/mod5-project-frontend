import React, {Component} from "react";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import SpecificCategory from "./SpecificCategory.js"
// import Button from '@material-ui/core/Button'
// import { addUserAction } from '../redux/actions';

class Category extends Component{
  constructor(props){
    super(props)
  }

  // handleClick=()=>{
  //   //this handle click will render a route of all the items that are related to that specfic category
  //   console.log("clicked")
  //   return (<div href="">)
  // }
  //
  // `/category-${this.props.category}`
  render(){
    return(
      <div>
      <Link to={`/category-${this.props.category}`} style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem>{this.props.category}</MenuItem>
      </Link>
      </div>
    )
  }
}

export default Category
