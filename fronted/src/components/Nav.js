import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import logoPhoto from '../assets/imgs/logo.png';
import { Link, NavLink } from 'react-router-dom';

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
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
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
              <Link className={classes.link} to="/login">
                <Button size="small" color="inherit">
                  Login
                </Button>
              </Link>
              <Link className={classes.link} to="/signup">
                <Button size="small" color="primary" variant="contained">
                  Sign Up
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ButtonAppBar;
