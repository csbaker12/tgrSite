import * as users from './index';
import axios from 'axios';
import {
  getAuthHeaders,
  getTokenCookie,
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

export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/community/users/profile`,
        getAuthHeaders()
      );
      dispatch(users.getProfile(request.data));
      console.log(request.data);
    } catch (error) {
      dispatch(users.errorGlobal(error.response.data.message));
    }
  };
};

export const updateProfile = (profile) => {
  return async (dispatch) => {
    try {
      const request = await axios.patch(
        `/community/users/profile`,
        profile,
        getAuthHeaders()
      );
      dispatch(users.updateProfile(request.data));
    } catch (error) {
      dispatch(users.errorGlobal(error.response.data.message));
    }
  };
};

export const updateEmail = (email) => {
  return async (dispatch) => {
    try {
      const request = await axios.patch(
        `/community/users/updateemail`,
        email,
        getAuthHeaders()
      );
      dispatch(users.updateEmail(request.data));
    } catch (error) {
      dispatch(users.errorGlobal(error.response.data.message));
    }
  };
};

export const updateUsername = (username) => {
  return async (dispatch) => {
    try {
      const request = await axios.patch(
        `/community/users/updateusername`,
        username,
        getAuthHeaders()
      );
      dispatch(users.updateUsername(request.data));
    } catch (error) {
      dispatch(users.errorGlobal(error.response.data.message));
    }
  };
};

export const isAuthUser = () => {
  return async (dispatch) => {
    try {
      if (!getTokenCookie()) {
        throw new Error();
      }
      const user = await axios.get(`/community/users/isauth`, getAuthHeaders());
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
