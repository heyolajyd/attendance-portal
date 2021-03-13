import React from 'react';
import PropTypes from 'prop-types';
import FancyRoute from 'components/FancyRoute';

const PublicRoutes = ({ component: Component, ...rest }) => {
  return <FancyRoute {...rest} render={(props) => <Component {...props} />} />;
};

PublicRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoutes;
