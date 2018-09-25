import React, {Component} from "react";
// import { addUserAction } from '../redux/actions';

class Review extends Component{
  constructor(props){
    super(props)
  }
  render(){
    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    // debugger
    return(
      <div>
      <li>{this.props.review.comment}
      <br/>
      Motto: {this.props.review.rating}
      </li>
      </div>
    )
  }
}

export default Review
