import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuestProtectedRoute = ({
  existingUser,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (existingUser) return <Component {...rest} />;
      return <Redirect to="/sign-in" from={location.pathname} />;
    }}
  />
);

GuestProtectedRoute.propTypes = {
  existingUser: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default GuestProtectedRoute;
