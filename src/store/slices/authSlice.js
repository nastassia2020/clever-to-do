import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentification',
  initialState: {
    isAuth: false,
    user: {
      login: '',
      email: '',
    },
    token: '',
    error: '',
    isError: false,
    firstLoad: true,
  },
  reducers: {
    loginHandler: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    setTokenHandler: (state, action) => {
      state.token = action.payload;
    },
    setDataBaseKey: (state, action) => {
      localStorage.setItem('data', JSON.stringify(action.payload));
    },
    firstLoadHandler: (state, action) => {
      state.firstLoad = action.payload;
    },
    logoutHandler: state => {
      state.user.login = '';
      state.user.email = '';
      localStorage.removeItem('token');
      state.isAuth = false;
    },
    authErrorHandler: (state, action) => {
      state.error = action.payload;
      state.isError = true;
    },
    clearErrorHandler: state => {
      state.error = '';
      state.isError = false;
    },
  },
});

export default authSlice;
