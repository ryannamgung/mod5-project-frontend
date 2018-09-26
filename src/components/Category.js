import React, {Component} from "react";
import MenuItem from '@material-ui/core/MenuItem';
// import { addUserAction } from '../redux/actions';

class Category extends Component{
  constructor(props){
    super(props)
  }
  render(){
    // debugger
    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    // debugger
    function handleClick(){
      //this handle click will render a route of all the items that are related to that specfic category
      return
    }

    return(
      <MenuItem onClick={this.handleClick}>{this.props.category}</MenuItem>
    )
  }
}

export default Category
