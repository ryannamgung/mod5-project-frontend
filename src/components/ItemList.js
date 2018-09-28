import React from "react";
import Item from './Item.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {fetchItems} from "../action.js"
import {fetchReviews} from "../action.js"

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
});

class ItemList extends React.Component{
  componentDidMount(){
    this.props.fetchItems()
  }

  render(){
    const allitems = this.props.items.map(item => {
      return <Item key={item.id} item={item}/>
    })

      return(
        <div>
        <center><div>{"ALL PRODUCTS"}</div></center>
        <br/>
        {allitems}
        </div>
      )
    }
  }

function mapStateToProps(state){
  return {
    items: state.itemReducer.items,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchItems: () => dispatch(fetchItems()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
