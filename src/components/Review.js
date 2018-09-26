import React, {Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { addUserAction } from '../redux/actions';

class Review extends Component{
  constructor(props){
    super(props)
  }
  render(){
    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    // debugger
    return(
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              "{this.props.review.comment}"
            </Typography>
            <Typography component="p">
               Average Rating: {this.props.review.rating}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default Review
