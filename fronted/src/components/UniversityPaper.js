import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import universityPic from '../assets/imgs/universitypaper.jpg';

const useStyles = makeStyles({
  liStyles: {
    padding: 10,
    marginTop: 15,
    boxShadow: 'none',
  },

  imgDiv: {
    maxWidth: 60,
    maxHeight: 60,
  },

  imgStyles: {
    width: '100%',
    borderRadius: 5,
  },

  innerGridWidth: {
    maxWidth: '70%',
  },

  typographyDiv: {
    marginLeft: 15,
  },

  h2Size: {
    fontSize: 20,
    fontWeight: 700,
  },
});

const UniversityPaper = ({ name, city, user }) => {
  const classes = useStyles();
  const history = useHistory();

  const addToFavorite = () => {
    if (!user.token) {
      history.push('/sign-in');
    } else {
      axios.post(
        'http://localhost:3001/favoriteUniversity',
        {
          universityName: name,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
    }
  };

  return (
    <Paper component="li" className={classes.liStyles}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid container alignItems="center" className={classes.innerGridWidth}>
          <div className={classes.imgDiv}>
            <img
              className={classes.imgStyles}
              src={universityPic}
              alt="universityPic"
            />
          </div>
          <div className={classes.typographyDiv}>
            <Typography className={classes.h2Size} variant="h2">
              {name}
            </Typography>
            <Typography variant="body2">{city}</Typography>
          </div>
        </Grid>
        <Button onClick={addToFavorite}>Add to favorite</Button>
      </Grid>
    </Paper>
  );
};

UniversityPaper.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default UniversityPaper;
