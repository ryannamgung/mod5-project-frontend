import React, {Component} from "react";
// import { addUserAction } from '../redux/actions';
import UUID from 'uuid';

class MyUser extends Component{
  constructor(props){
    super(props)
  }

  render(){
    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    return(
      <div>
      <li>{this.props.user.name}</li>
      <button>learn more!</button>
      </div>
    )
  }
}

export default MyUser
