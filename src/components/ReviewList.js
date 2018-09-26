import React from "react";
import Review from './Review.js'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
});

const ReviewList = (props) => {
  const allreviews = props.reviews.map(review => {
    return <Review key={review.id} review={review}/>
  })

  return(
    <div>
      <center><div>{"ALL REVIEWS"}</div></center>
      <ul>{allreviews}</ul>
    </div>
  )
}

export default ReviewList
