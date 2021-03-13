import httpService, { getHeaders } from 'services/httpService';

export const loginUser = (loginCreds) => {
  return httpService.post('/sessions', loginCreds);
};

export const signupUser = (data) => {
  return httpService.post('/auth/signup', data, getHeaders());
};

export const requestPasswordReset = (data) => {
  return httpService.post('/auth/password/reset', data);
};

export const resetPassword = (data) => {
  return httpService.post('/auth/password/update', data);
};
