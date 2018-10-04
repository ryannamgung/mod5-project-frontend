import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../action.js'
import {Link} from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Image from 'material-ui-image'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class UploadForm extends Component {
  state = {
    comment: '',
    rating: null,
    item_id: this.props.location.pathname.split("-")[2]
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value})
  }

  handleRadio = (event) => {
    this.setState({ rating: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAReview({comment: this.state.comment, rating: this.state.rating, item_id: this.state.item_id})
    alert("Your review has been successfully submitted!")
    this.props.history.push(`my-cart`);
  }
  // <textarea id="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <TextField
          id="filled-name"
          label="Review"
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
          variant="filled"
        />
      <br/>
      <br/>

      <label>Give this item a rating:</label>
        <form action=" ">
          <input type="radio" name="1" value="1" onChange={this.handleRadio}/> 1 <br/>
          <input type="radio" name="2" value="2" onChange={this.handleRadio}/> 2 <br/>
          <input type="radio" name="3" value="3" onChange={this.handleRadio}/> 3 <br/>
          <input type="radio" name="4" value="4" onChange={this.handleRadio}/> 4 <br/>
          <input type="radio" name="5" value="5" onChange={this.handleRadio}/> 5 <br/>
          <input type="submit" value="Submit"/>
        </form>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {
    reviews: state.reviewReducer.reviews,
  }
}

export default connect(mapStateToProps, actions)(UploadForm)
