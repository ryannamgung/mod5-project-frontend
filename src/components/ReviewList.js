import React from "react";
import Review from './Review.js'

const ReviewList = (props) => {
  const allreviews = props.reviews.map(review => {
    return <Review key={review.id} review={review}/>
  })

  return(
    <div>
      <h2>All Reviews</h2>
      <ul>{allreviews}</ul>
    </div>
  )
}

export default ReviewList
