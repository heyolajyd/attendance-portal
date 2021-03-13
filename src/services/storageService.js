export const TOKEN_KEY = `TGSP_${process.env.NODE_ENV}`;

export const setToken = (token) => {
  return window.localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => window.localStorage.getItem(TOKEN_KEY) || '';

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};
