import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../action.js'

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
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <label>Review:
      <br/>
      <textarea type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
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
