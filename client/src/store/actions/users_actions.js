import * as users from './index';
import axios from 'axios';
import {
  getAuthHeaders,
  removeTokenCookie,
} from '../../components/utils/tools';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const registerUser = (values) => {
  return async (dispatch) => {
    try {
      const user = await axios.post(`/community/users/register`, {
        email: values.email,
        username: values.username,
        password: values.password,
      });
      dispatch(users.authUser({ data: user.data, auth: true }));
      dispatch(users.successGlobal('Welcome. Check Email For Validation'));
    } catch (error) {
      dispatch(users.errorGlobal(error.response.data.message));
    }
  };
};

export const signInUser = (values) => {
  return async (dispatch) => {
    try {
      const user = await axios.post(`/community/users/signin`, {
        email: values.email,
        password: values.password,
      });

      dispatch(users.authUser({ data: user.data, auth: true }));
      dispatch(users.successGlobal('Welcome!'));
    } catch (error) {
      dispatch(users.errorGlobal(error.response.data.message));
    }
  };
};

export const isAuthUser = () => {
  return async (dispatch) => {
    try {
      const user = await axios.get(`/community/users/isauth`, getAuthHeaders);
      dispatch(users.authUser({ data: user.data, auth: true }));
    } catch (error) {
      dispatch(users.authUser({ data: {}, auth: false }));
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    removeTokenCookie();
    dispatch(users.signOut());
  };
};
