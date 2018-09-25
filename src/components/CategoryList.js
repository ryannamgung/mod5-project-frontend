import React from "react";
import Category from "./Category.js"
import UUID from 'uuid'

const CategoryList = (props) => {
  var uniqueCategories = Array.from(new Set(props.items)).map(item => item.good_type)
  debugger
  uniqueCategories.map(category => {
    return <Category id={UUID()} category={category}/>
  })
  // <ul>{allcategories}</ul>
  return(
    <div>
      <h2>Categories</h2>
    </div>
  )
}

export default CategoryList
