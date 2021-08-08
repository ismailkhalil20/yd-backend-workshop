import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  Button,
  TextField,
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    padding: theme.spacing(3),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },

  marginBottom15: {
    marginBottom: 15,
  },
}));

const AddUniversity = ({ user }) => {
  const classes = useStyles();

  const [university, setUniversity] = useState({
    name: '',
    city: '',
  });

  const history = useHistory();

  const handleChange = e => {
    console.log(e);
    setUniversity({ ...university, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:3001/add-university',
        {
          university: university.name,
          city: university.city,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" className={classes.container} maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h3" gutterBottom>
          Add University
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <TextField
              name="name"
              variant="outlined"
              required
              fullWidth
              id="universityName"
              color="primary"
              label="University Name"
              autoFocus
              value={university.name}
              onChange={handleChange}
              className={classes.marginBottom15}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="city"
              label="City Name"
              color="primary"
              name="city"
              value={university.city}
              onChange={handleChange}
              className={classes.marginBottom15}
            />
            <Button
              className={classes.marginBottom15}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default AddUniversity;
