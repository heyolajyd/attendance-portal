import Dashboard from './Dashboard';

export const dashRoute = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
    auth: true,
  },
];
