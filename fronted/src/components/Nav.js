import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Drawer,
  useTheme,
  IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import logoPhoto from '../assets/imgs/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  logo: {
    maxHeight: 60,
  },
  linksContainer: {
    width: 350,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 600,
  },
  activeLink: {
    color: theme.palette.primary.main,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: '240px',
    background: '#E5E5E5',
  },
}));

const ButtonAppBar = ({ user }) => {
  const classes = useStyles();

  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const properPath = text => {
    if (text === 'Home') return '/';
    if (text === 'About') return '/about';
    if (text === 'Sign Up') return '/sign-up';
    if (text === 'Add City') return '/add-city';
    if (text === 'Add University') return '/add-university';
    return '/sign-in';
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = () => {
    let linksArray;
    if (user) {
      linksArray = ['Home', 'About', 'Add City', 'Add University'];
    } else {
      linksArray = ['Home', 'About', 'Sign In', 'Sign Up'];
    }
    return (
      <div>
        <div className={classes.toolbar} />
        <List>
          {linksArray.map(text => (
            <NavLink
              key={text}
              exact
              activeClassName={classes.activeLink}
              className={classes.link}
              to={properPath(text)}
              onClick={handleDrawerToggle}
            >
              <ListItem button>
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <AppBar position="sticky" color="transparent" className={classes.root}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <img
                className={classes.logo}
                src={logoPhoto}
                alt="Choose Wisely Logo"
              />
            </Grid>
            <Grid item>
              <Hidden xsDown>
                <Grid
                  className={classes.linksContainer}
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <NavLink
                    className={classes.link}
                    to="/"
                    exact
                    activeClassName={classes.activeLink}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={classes.link}
                    to="/about"
                    exact
                    activeClassName={classes.activeLink}
                  >
                    About
                  </NavLink>
                  {user ? (
                    <>
                      <NavLink
                        className={classes.link}
                        to="/add-city"
                        exact
                        activeClassName={classes.activeLink}
                      >
                        Add City
                      </NavLink>
                      <NavLink
                        className={classes.link}
                        to="/add-university"
                        exact
                        activeClassName={classes.activeLink}
                      >
                        Add University
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <Link className={classes.link} to="/sign-in">
                        <Button size="small" color="inherit">
                          Login
                        </Button>
                      </Link>
                      <Link className={classes.link} to="/sign-up">
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </Grid>
              </Hidden>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer()}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

ButtonAppBar.propTypes = {
  user: PropTypes.bool.isRequired,
};

export default ButtonAppBar;
