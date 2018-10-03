import React, {Component} from "react";
import CategoryList from "./CategoryList.js"
import Button from '@material-ui/core/Button'
import Image from 'material-ui-image'
import {Link} from "react-router-dom"
import MySlider from "./MySlider.js"

const homePage = (props) => {
    return (
      <div>
      <CategoryList />
      <MySlider/>
      </div>
    );
}


export default homePage
