import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';

const FancyRoute = (props) => {
  useEffect(() => {
    nprogress.done();
  });

  nprogress.start();

  return <Route {...props} />;
};

export default FancyRoute;
