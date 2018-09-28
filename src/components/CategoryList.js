import UUID from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Category from './Category'
import { connect } from 'react-redux'
import {fetchItems} from "../action.js"

class CategoryList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      category: '',
      open: false,
    }
  }

  componentDidMount(){
    this.props.fetchItems()
  }

  unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render(){
    var uniqueCategories = Array.from(new Set(this.props.items)).map(item => item.good_type)
    //
    // const categoryNames = uniqueCategories.map(category => {
    //   return <Category id={UUID()} category={category}/>
    // })

    const categoryArray = uniqueCategories.filter(this.unique)
    const categoryNames = categoryArray.map((category) => {return <Category id={UUID()} category={category}/>})

    const { classes } = this.props;

    return (
      <form autoComplete="off">
      <center>
        <FormControl fullWidth={true}>
          <InputLabel>Categories</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.category}
            onChange={this.handleChange}
            inputProps={{
              name: 'category',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
              {categoryNames}
          </Select>
        </FormControl>
        </center>
      </form>
    );}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
