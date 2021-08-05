import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuestProtectedRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (user) return <Component />;
      return <Redirect to="/sign-in" from={location.pathname} />;
    }}
  />
);

GuestProtectedRoute.propTypes = {
  user: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default GuestProtectedRoute;
