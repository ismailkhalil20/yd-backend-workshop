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
import logoPhoto from '../assets/imgs/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

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

const ButtonAppBar = () => {
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
    return '/sign-in';
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Home', 'About', 'Sign In', 'Sign Up'].map(text => (
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
                  <Link className={classes.link} to="/sign-in">
                    <Button size="small" color="inherit">
                      Login
                    </Button>
                  </Link>
                  <Link className={classes.link} to="/sign-up">
                    <Button size="small" color="primary" variant="contained">
                      Sign Up
                    </Button>
                  </Link>
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default ButtonAppBar;
