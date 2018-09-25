import React, {Component} from "react";
// import { addUserAction } from '../redux/actions';

class Category extends Component{
  constructor(props){
    super(props)
  }
  render(){

    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    // debugger

    function handleClick(){
      return
    }
    return(
      <div>
      <li>{this.props.item.name}
      <br/>
      Type: {this.props.item.good_type}
      <br/>
      Price: ${this.props.item.price}
      <br/>
      In Stock?: {this.props.item.stock.toString()}
      </li>
      <br/>
      <button onClick={this.handleClick}> Purchase </button>
      </div>
    )
  }
}

export default Category
