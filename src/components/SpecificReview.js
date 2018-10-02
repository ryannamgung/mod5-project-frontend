import React from "react";
import { connect } from 'react-redux'
import {fetchReviews} from "../action.js"
import Review from "./Review.js"
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"

class SpecificReview extends React.Component{
  componentDidMount(){
    fetchReviews();
  }

  render(){
    const reviewItem = parseInt(this.props.location.pathname.split("-")[1])
    let filteredReviews = this.props.reviews.filter((review) => review.item_id == reviewItem)
    let mySearch = filteredReviews.map((review) => <Review key={review.id} review={review}/>)
    // debugger
    // const allreviews = this.props.reviews.map(item => {
    //   return <Item key={item.id} item={item}/>
    // })
    return(
      <div>
        {mySearch}
        <Link to={"/homepage"}><Button>Back To Home Page</Button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    reviews: state.reviewReducer.reviews,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchReviews: () => dispatch(fetchReviews()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificReview)
