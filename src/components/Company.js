import React, {Component} from "react";
// import { addUserAction } from '../redux/actions';

class Company extends Component{
  constructor(props){
    super(props)
  }
  render(){

    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    // debugger
    return(
      <div>
      <li>{this.props.company.name}
      <br/>
      Motto: {this.props.company.motto}
      </li>
      </div>
    )
  }
}

export default Company
