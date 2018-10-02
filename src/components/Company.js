import React, {Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"

class Company extends Component{
  constructor(props){
    super(props)
  }

  render(){

    //will need to later add the event handler functionality to this but for now lets just build out the general template of the application
    // debugger
    return(
      <Card>
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.company.name}
            </Typography>
            <Typography component="p">
               - "{this.props.company.motto}"
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={this.props.company.company_url}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default Company
