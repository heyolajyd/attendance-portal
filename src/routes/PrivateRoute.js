import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import { TOKEN_KEY } from 'services/storageService';
import FancyRoute from 'components/FancyRoute';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem(TOKEN_KEY);
  const location = useLocation();

  return (
    <FancyRoute
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            exact
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
