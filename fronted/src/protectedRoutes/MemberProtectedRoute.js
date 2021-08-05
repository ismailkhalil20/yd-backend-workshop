import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const MemberProtectedRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (user)
        return <Redirect to={{ pathname: '/' }} from={location.pathname} />;
      return <Component />;
    }}
  />
);

MemberProtectedRoute.propTypes = {
  user: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default MemberProtectedRoute;
