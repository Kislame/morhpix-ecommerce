import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apicalls';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStarted: (user) => {
      user.isFetching = true;
    },
    loginSucessed: (user, action) => {
      user.isFetching = false;
      user.currentUser = action.payload;
    },
    loginFailed: (user) => {
      user.isFetching = false;
      user.error = true;
    },
  },
});
export const { loginStarted, loginSucessed, loginFailed } = userSlice.actions;

export const loginUser = (user) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: '/auth',
      method: 'post',
      onStart: loginStarted.type,
      onSucess: loginSucessed.type,
      onError: loginFailed.type,
      data: user,
    })
  );
};

export default userSlice.reducer;
