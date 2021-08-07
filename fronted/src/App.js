import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Container,
  unstable_createMuiStrictModeTheme as createTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';

import MemberProtectedRoute from './protectedRoutes/MemberProtectedRoute';
import GuestProtectedRoute from './protectedRoutes/GuestProtectedRoute';

import AddCity from './pages/AddCity';
import AddUniversity from './pages/AddUniversity';
import Nav from './components/Nav';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  const [user, setUser] = useState({});
  const [existingUser, setExistingUser] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#4A8D56',
      },
    },
    background: {
      default: '#E5E5E5',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="App">
        <Router>
          <Route path="/">
            <Nav user={existingUser} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <MemberProtectedRoute
            user={user}
            existingUser={existingUser}
            exact
            component={SignIn}
            handleFetch={setUser}
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
            component={AddCity}
            path="/add-city"
          />
          <GuestProtectedRoute
            user={user}
            existingUser={existingUser}
            exact
            component={AddUniversity}
            path="/add-university"
          />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
