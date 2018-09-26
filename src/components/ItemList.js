import React from "react";
import Item from './Item.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
});

const ItemList = (props) => {
  //will display the first six items of the stock!
  //will later change based on popularity etc.
  const allitems = props.items.slice(0,5).map(item => {
    return <Item key={item.id} item={item}/>
  })

  return(
    <div>
    <center><div>{"FEATURED PRODUCTS"}</div></center>
    <br/>
    {allitems}
    </div>
  )
}

export default ItemList
