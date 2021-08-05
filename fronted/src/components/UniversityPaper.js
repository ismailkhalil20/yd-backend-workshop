import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import universityPic from '../assets/imgs/universitypaper.jpg';
import PropTypes from 'prop-types';

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
    maxWidth: '35%',
  },

  h2Size: {
    fontSize: 30,
  },
});

const UniversityPaper = ({ name, city }) => {
  const classes = useStyles();

  return (
    <Paper component="li" className={classes.liStyles}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          className={classes.innerGridWidth}
        >
          <div className={classes.imgDiv}>
            <img
              className={classes.imgStyles}
              src={universityPic}
              alt="universityPic"
            />
          </div>
          <div>
            <Typography className={classes.h2Size} variant="h2">
              {name}
            </Typography>
            <Typography variant="body2">{city}</Typography>
          </div>
        </Grid>
        <Button>Read More</Button>
      </Grid>
    </Paper>
  );
};

UniversityPaper.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default UniversityPaper;
