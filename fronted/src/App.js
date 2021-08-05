import { useState } from 'react';
import Nav from './components/Nav';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
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

function App() {
  const [userData, setUserData] = useState({});
  const user = true;

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
            <Nav user={user} />
          </Route>
          <Route exact path="/">
            <Home {...userData} />
          </Route>
          <MemberProtectedRoute
            user={user}
            exact
            component={SignIn}
            handleFetch={setUserData}
            path="/sign-in"
          />
          <MemberProtectedRoute
            user={user}
            exact
            component={SignUp}
            handleFetch={setUserData}
            path="/sign-up"
          />
          <GuestProtectedRoute
            user={user}
            exact
            component={AddCity}
            path="/add-city"
          />
          <GuestProtectedRoute
            user={user}
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
