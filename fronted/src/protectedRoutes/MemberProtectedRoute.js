import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const MemberProtectedRoute = ({
  existingUser,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (existingUser)
        return <Redirect to={{ pathname: '/' }} from={location.pathname} />;
      return <Component {...rest} />;
    }}
  />
);

MemberProtectedRoute.propTypes = {
  existingUser: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default MemberProtectedRoute;
