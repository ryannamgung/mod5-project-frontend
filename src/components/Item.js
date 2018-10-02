import React, {Component} from "react";
// import { addUserAction } from '../redux/actions';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import SpecificReview from './SpecificReview.js'
import { connect } from 'react-redux'
import * as actions from '../action.js'
import {Link} from "react-router-dom"

class Item extends Component{
  constructor(props){
    super(props)
  }


// do an href on the button


  purchaseGood = () => {
    return this.props.addToCart(this.props.item)
  }

  render(){
    return(
      <Paper className={"classes-"+`${this.props.item.id}`}>
        <Grid container spacing={8}>
        <Grid item>
        <ButtonBase className={this.props.item.image_src}>
            <img className={this.props.item.image_src} alt="complex"
            style={{width: '90px', height: '90px'}}
            src={this.props.item.image_src} />
        </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>

              <Typography gutterBottom>Price: ${this.props.item.price}</Typography>
              <Typography color="textSecondary"> {this.props.item.name}</Typography>
              <Typography color="textSecondary">Category: {this.props.item.good_type}</Typography>
              <Typography color="textSecondary">ID: {this.props.item.id}</Typography>
            </Grid>
            <Grid item>
            <Button variant="outlined" color="primary" onClick={this.purchaseGood}>Add to Cart</Button>
            <Link to={`/review-${this.props.item.id}`}>
            <Button variant="outlined" color="tertiary">View Reviews</Button>
            </Link>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        <br/>
      </Paper>
    )
  }
}

function mapStateToProps(state){
  return {
    addToCart: state.itemReducer.cart,
  }
}


export default connect(mapStateToProps, actions)(Item)
