import React, {Component} from "react";
import CategoryList from "./CategoryList.js"
import FeaturedItems from "./FeaturedItems.js"
import Button from '@material-ui/core/Button'
import Image from 'material-ui-image'
import {Link} from "react-router-dom"
const homePage = (props) => {
    return (
      <div>
      <CategoryList />
      <Link to={"/all-items"}><Button>View All Items</Button></Link>
      <Link to={"/all-companies"}><Button>View Our Sponsors</Button></Link>
      </div>
    );
}


export default homePage
