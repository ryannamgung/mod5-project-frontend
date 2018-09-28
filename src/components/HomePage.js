import React, {Component} from "react";
import CategoryList from "./CategoryList.js"
import FeaturedItems from "./FeaturedItems.js"
import Button from '@material-ui/core/Button'

const HomePage = () => {
  return(
    <div>
      <CategoryList />
      <FeaturedItems />
      <Button href="all-items">View All Items</Button>
      <Button href="all-companies">View Our Sponsors</Button>
    </div>
  )
}

export default HomePage
