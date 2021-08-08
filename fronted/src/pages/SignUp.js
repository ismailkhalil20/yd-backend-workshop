import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Button,
  TextField,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    padding: theme.spacing(3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },

  marginBottom15: {
    marginBottom: 15,
  },
}));

function SignUp({ handleFetch }) {
  const classes = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/sign-up", {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
      });

      handleFetch(result);
      history.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" className={classes.container} maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h3" gutterBottom>
          Sign Up
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
              onChange={handleChange}
              className={classes.marginBottom15}
            />
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
              onChange={handleChange}
              className={classes.marginBottom15}
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              color="primary"
              fullWidth
              // ref={register}
              type="email"
              name="email"
              required
              value={user.email}
              onChange={handleChange}
              className={classes.marginBottom15}
            ></TextField>
            <TextField
              // ref={register}
              id="outlined-password-input"
              label="Password"
              variant="outlined"
              color="primary"
              fullWidth
              type="password"
              name="password"
              required
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
              className={classes.marginBottom15}
            ></TextField>
            <Button
              className={classes.marginBottom15}
              color="primary"
              variant="contained"
              type="submit"
            >
              sign Up
            </Button>
            <Typography
              variant="body2"
              align="center"
              className={classes.marginBottom15}
            >
              Already have an account?{" "}
              <Link to="/sign-in" variant="body2">
                Sign In
              </Link>
            </Typography>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

SignUp.propTypes = {
  handleFetch: PropTypes.func.isRequired,
};

export default SignUp;
