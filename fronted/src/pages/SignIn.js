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
  container: {
    padding: theme.spacing(3),
  },
}));

const SignIn = ({ handleFetch, persistUser }) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleSingIn = async e => {
  //   e.preventDefault();
  //   const settings = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   };
  //   try {
  //     const fetchResponse = await fetch(
  //       `http://localhost:3001/sign-in`,
  //       settings,
  //     );
  //     const data = await fetchResponse.json();
  //     handleFetch(data);
  //     history.push('/');
  //     return data;
  //   } catch (e) {
  //     return e;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/sign-in', {
        email: user.email,
        password: user.password,
      })
      .then(({ data }) => {
        handleFetch(data);
        persistUser(true);
        history.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography variant="h3" gutterBottom>
        Sign In
      </Typography>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          spacing={3}
          align="center"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={user.email}
                  onChange={handleChange}
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  type="email"
                  name="email"
                  required
                  autoFocus
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.password}
                  onChange={handleChange}
                  id="outlined-password-input"
                  label="Password"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit">
              sign in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignIn;
