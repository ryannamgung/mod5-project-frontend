import React, {Component} from "react";
import * as actions from '../action.js'
import { connect } from 'react-redux'
import CartItem from "./CartItem.js"
import Button from '@material-ui/core/Button'
import Image from 'material-ui-image'
import {Link} from "react-router-dom"
// import { addUserAction } from '../redux/actions';

class MyCart extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const cartItems = this.props.cart.map(item => <CartItem key={item.id} item={item}/>)
    // debugger
    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    return(
      <div>
      <h1>My Cart</h1>
        {cartItems}
        <Link to={"/checkout"}><Button>Checkout</Button></Link>
        <Link to={"/homepage"}><Button>Continue Shopping</Button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.itemReducer.cart,
  }
}

export default connect(mapStateToProps, actions)(MyCart)
