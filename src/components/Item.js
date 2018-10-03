import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../action.js'

const styles = theme => ({
  card: {
    minWidth: 320,
    maxWidth: 320,
  },
  media: {
    height: 0,
    paddingTop: '70.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = { expanded: false };
  }


  purchaseGood = () => {
    return this.props.addToCart(this.props.item)
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} variant="outlined">
      <center>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.item.name}
          subheader={`Price: $ ${this.props.item.price}`}
        />
        <CardMedia
          className={classes.media}
          image={this.props.item.image_src}
        />
        <CardContent>
          <Typography component="p">
            Category: {this.props.item.good_type}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button variant="outlined" color="primary" onClick={this.purchaseGood}>Add to Cart</Button>
          <Link to={`/review-${this.props.item.id}`}>
          <Button variant="outlined" color="tertiary">View Reviews</Button>
          </Link>
        </CardActions>
      </center>
      </Card>
    );
  }
}

function mapStateToProps(state){
  return {
    addToCart: state.itemReducer.cart,
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};
//
// export default withStyles(styles)(Item);
export default connect(mapStateToProps, actions)(withStyles(styles)(Item))
