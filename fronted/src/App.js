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

function App() {
  const [userData, setUserData] = useState({});

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
          <Route path="/" component={Nav} />
          <Route exact path="/">
            <Home {...userData} />
          </Route>
          <Route path="/sign-in">
            <SignIn handleFetch={setUserData} />
          </Route>
          <Route path="/sign-up">
            <SignUp handleFetch={setUserData} />
          </Route>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
