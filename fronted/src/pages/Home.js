import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

import homePageImage from '../assets/imgs/university.png';
import UniversityPaper from '../components/UniversityPaper';

const useStyles = makeStyles({
  gridMargin: {
    maxWidth: 700,
    margin: '15px auto 0 auto',
  },

  imageWidth: {
    width: '100%',
    maxWidth: 700,
  },

  inputWidth: {
    width: '100%',
    maxWidth: 500,
    marginTop: 10,
  },

  ulStyles: {
    width: '100%',
    maxWidth: 600,
    listStyle: 'none',
  },
});

const Home = ({ user }) => {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [universities, setUniversities] = useState([]);

  const lookForCity = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/${city}/get-university`,
      );
      setUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };

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
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <TextField
          className={classes.inputWidth}
          type="search"
          label="Choose a city"
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <Button
          type="button"
          onClick={lookForCity}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </Grid>
      <ul className={classes.ulStyles}>
        {universities.map(university => (
          <UniversityPaper
            key={university.id}
            name={university.universityName}
            city={city}
            user={user}
          />
        ))}
      </ul>
    </Grid>
  );
};

export default Home;
