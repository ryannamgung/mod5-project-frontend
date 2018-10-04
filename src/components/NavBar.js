import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LeftMenu from "./LeftMenu.js"
import {Link} from "react-router-dom"
import SvgIcon from '@material-ui/core/SvgIcon';
//
// <IconButton
//   aria-owns={open ? 'menu-appbar' : null}
//   aria-has popup="true"
//   onClick={this.handleMenu}
//   color="inherit"
//   className={classes.profileIcon}
// >
//   <AccountCircle />
// </IconButton>

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  homeIcon: {
    marginRight: 5,
  },
  title: {
    marginLeft: 20,
  },
  profileIcon: {
    marginLeft: 10
  }
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class NavBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  //Can change this function to rerender a different route
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Sleep' : 'Activate'}
          />
        </FormGroup>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="default" aria-label="Menu">
              <LeftMenu />
            </IconButton>


            <Typography variant="title" color="inherit" className={classes.grow}>
              Clothes R Us
            </Typography>
            {auth && (
              <div>
                <Link to={"/my-cart"}>
                <IconButton color="default" className={classes.menuButton}>
                  <ShoppingCartIcon />
                  <h4>Cart</h4>
                  </IconButton>
                </Link>

                <Link to={"/homepage"}>
                <IconButton color="default" className={classes.homeIcon}>
                <HomeIcon color="default" className={classes.icon} fontSize="large" />
                <h4>Home</h4>
                </IconButton>
                </Link>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
