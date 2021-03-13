import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import AuthWrapper from 'components/AuthWrapper';
import { loginUser, logoutUser } from '../auth.slice';
import LoginForm from './LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const handleLogin = (cred) => {
    // get return url from location state or default to home page
    const { from } = location.state || { from: { pathname: '/' } };
    dispatch(loginUser(cred, from));
  };

  console.log('here');
  return (
    <AuthWrapper>
      <LoginForm handleLogin={handleLogin} />
    </AuthWrapper>
  );
};

export default Login;
