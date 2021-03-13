import { createSlice } from '@reduxjs/toolkit';
import * as Auth from 'api/auth';
import { setToken, getToken } from 'services/storageService';
import history from 'services/history';
import { userService } from 'services/userService';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    loginFailed(state, action) {
      state.error = action.payload.message;
    },
    loginSuccessFul(state) {
      state.isLoggedIn = true;
      state.error = null;
    },
    logoutUserSuccess() {},
  },
});

export const {
  setIsLoggedIn,
  loginSuccessFul,
  loginFailed,
  logoutUserSuccess,
} = authSlice.actions;

// Selector
export const selectUser = (state) => state.auth.user;

export const authCheck = () => (dispatch) => {
  const isLoggedIn = !!getToken();

  if (isLoggedIn) {
    dispatch(setIsLoggedIn(isLoggedIn));
  }
};

export const loginUser = (cred, from) => async (dispatch) => {
  try {
    const response = await Auth.loginUser(cred);

    console.log({ response });
    const token = JSON.stringify(cred);

    setToken(token);

    dispatch(loginSuccessFul());

    history.push(from);
  } catch (error) {
    const { message } = error;
    dispatch(loginFailed({ message }));
  }
};

export const logoutUser = () => (dispatch) => {
  userService.logout();

  dispatch(logoutUserSuccess());
};

export default authSlice.reducer;
