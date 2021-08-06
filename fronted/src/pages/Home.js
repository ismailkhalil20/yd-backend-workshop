import { Grid, makeStyles, TextField } from '@material-ui/core';

import homePageImage from '../assets/imgs/university.png';
import UniversityPaper from '../components/UniversityPaper';

const useStyles = makeStyles({
  gridMargin: {
    marginTop: 15,
  },

  imageWidth: {
    width: '100%',
    maxWidth: 700,
  },

  inputWidth: {
    width: '100%',
    maxWidth: 600,
    marginTop: 10,
  },

  ulStyles: {
    width: '100%',
    maxWidth: 600,
    listStyle: 'none',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.gridMargin}
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <img
        className={classes.imageWidth}
        src={homePageImage}
        alt="University clipart"
      />
      <TextField
        className={classes.inputWidth}
        type="search"
        label="Choose a city"
      />
      <ul className={classes.ulStyles}>
        <UniversityPaper name="Harvard" city="New York" />
        <UniversityPaper name="Harvard" city="New York" />
        <UniversityPaper name="Harvard" city="New York" />
      </ul>
    </Grid>
  );
};

export default Home;
