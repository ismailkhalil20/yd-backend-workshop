import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Typography, Button, TextField, Container, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    padding: theme.spacing(3)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignUn({ handleFetch }) {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  let history = useHistory();
  const handlChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handlSingUn = async (e) => {
    e.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/sign-up`,
        settings
      );
      const data = await fetchResponse.json();
      console.log(data);
      handleFetch(data.user);
      history.push("/");
      return data;
    } catch (e) {
      return e;
    }
  };
  return (
    <Container component="main" className={classes.container} maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography variant="h3" gutterBottom>
        Sign Up
      </Typography>
      <form
        onSubmit={handlSingUn}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              color="primary"
              label="First Name"
              autoFocus
              value={user.firstName}
              onChange={handlChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              color="primary"
              name="lastName"
              autoComplete="lname"
              value={user.lastName}
              onChange={handlChange}
            />
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                color="primary"
                fullWidth
                // ref={register}
                type="email"
                name="email"
                Required
                value={user.email}
                onChange={handlChange}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                // ref={register}
                id="outlined-password-input"
                label="Password"
                variant="outlined"
                color="primary"
                fullWidth
                type="password"
                name="password"
                Required
                autoComplete="current-password"
                value={user.password}
                onChange={handlChange}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.submit}
              color="primary"
              variant="contained"
              type="submit"
            >
              sign in
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item>
            
            Already have an account? <Link href="/sign-in" variant="body2">Sign in</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  );
}

export default SignUn;
