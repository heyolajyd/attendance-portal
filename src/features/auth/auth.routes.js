import Login from './login';

export const authRoutes = [
  {
    path: '/login',
    component: Login,
    auth: false,
  },
];
