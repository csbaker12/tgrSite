import * as users from './index';
import axios from 'axios';

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
      dispatch(users.errorGlobal('Error Registering'));
    }
  };
};
