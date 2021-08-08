import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Container,
  unstable_createMuiStrictModeTheme as createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";

import MemberProtectedRoute from "./protectedRoutes/MemberProtectedRoute";
import GuestProtectedRoute from "./protectedRoutes/GuestProtectedRoute";

import AddUniversity from "./pages/AddUniversity";
import Nav from "./components/Nav";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import FavoriteUniversities from "./pages/FavoriteUniversities";
import About from "./pages/About";

function App() {
  const [user, setUser] = useState({});
  const [existingUser, setExistingUser] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4A8D56",
      },
      secondary: {
        main: "#ff7e0f",
      },
    },
    background: {
      default: "#E5E5E5",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="App">
        <Router>
          <Route path="/">
            <Nav
              user={existingUser}
              setExistingUser={setExistingUser}
              setUser={setUser}
            />
          </Route>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <MemberProtectedRoute
            user={user}
            existingUser={existingUser}
            exact
            component={SignIn}
            handleFetch={setUser}
            persistUser={setExistingUser}
            path="/sign-in"
          />
          <MemberProtectedRoute
            user={user}
            existingUser={existingUser}
            exact
            component={SignUp}
            handleFetch={setUser}
            path="/sign-up"
          />
          <GuestProtectedRoute
            user={user}
            existingUser={existingUser}
            exact
            component={AddUniversity}
            path="/add-university"
          />
          <GuestProtectedRoute
            user={user}
            existingUser={existingUser}
            exact
            component={FavoriteUniversities}
            path="/favorite-universities"
          />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
