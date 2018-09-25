import React from "react";
import Item from './Item.js'

const ItemList = (props) => {
  // debugger
  const allitems = props.items.map(item => {
    return <Item key={item.id} item={item}/>
  })

  return(
    <div>
      <h2>Categories</h2>
      <ul>{allitems}</ul>
    </div>
  )
}

export default ItemList
