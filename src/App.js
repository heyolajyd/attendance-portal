import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import history from 'services/history';
import FancyRoute from './components/FancyRoute/FancyRoute';
import { routes, PrivateRoute, PublicRoute } from 'routes';
import NotFound from 'components/NotFound/NotFound';

function App() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />;
          }
          return <PublicRoute key={i} {...route} />;
        })}
        <FancyRoute path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
