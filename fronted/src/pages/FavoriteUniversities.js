import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
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

  ulStyles: {
    listStyle: 'none',
    maxWidth: 700,
    margin: '15px auto',
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

const FavoriteUniversities = ({ user }) => {
  const [universities, setUniversities] = useState([]);
  const classes = useStyles();

  const handleDelete = universityId => {
    axios
      .delete('http://localhost:3001/favoriteUniversity', {
        data: {
          universityId,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(({ status }) => {
        if (status === 200) {
          axios
            .get('http://localhost:3001/favoriteUniversity', {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            })
            .then(({ data }) => {
              setUniversities(data);
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/favoriteUniversity', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setUniversities(data);
      })
      .catch(err => console.log(err));
  }, [user.token]);

  return (
    <Grid>
      <ul className={classes.ulStyles}>
        {universities.map(university => (
          <Paper
            key={university.id}
            component="li"
            className={classes.liStyles}
          >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid
                container
                alignItems="center"
                className={classes.innerGridWidth}
              >
                <div className={classes.imgDiv}>
                  <img
                    className={classes.imgStyles}
                    src={universityPic}
                    alt="universityPic"
                  />
                </div>
                <div className={classes.typographyDiv}>
                  <Typography className={classes.h2Size} variant="h2">
                    {university.universityName}
                  </Typography>
                </div>
              </Grid>
              <Button onClick={() => handleDelete(university.id)}>
                Delete From Favorites
              </Button>
            </Grid>
          </Paper>
        ))}
      </ul>
    </Grid>
  );
};

export default FavoriteUniversities;
