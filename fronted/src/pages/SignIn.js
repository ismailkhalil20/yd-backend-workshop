import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Typography, Button, TextField, Container, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  }
}));


function SignIn({ handleFetch, handleToken }) {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSingIn = async (e) => {
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
        `http://localhost:3001/sign-in`,
        settings
      );
      const data = await fetchResponse.json();
      // handleToken(data.token)
      handleFetch(data);
      history.push("/");
      return data;
    } catch (e) {
      return e;
    }
  };
  return (
        <Container className={classes.container} maxWidth="xs">
        <Typography variant="h3" gutterBottom>
          Sign In
        </Typography>
        <form
        onSubmit={handleSingIn}
          // onSubmit={handleSubmit(onSubmit)}
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
                    // ref={register}
                    type="email"
                    name="email"
                    Required
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={user.password}
                    onChange={handleChange}
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
}

export default SignIn;
