import {
  AUTH_USER,
  SIGN_OUT,
  GET_PROFILE,
  UPDATE_EMAIL,
  UPDATE_PROFILE,
  UPDATE_USERNAME,
} from '../types';

let DEFAULT_USER_STATE = {
  data: {
    _id: null,
    email: null,
    username: null,
    role: null,
  },
  auth: false,
};

export default function usersReducer(state = DEFAULT_USER_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        data: { ...state.data, ...action.payload.data },
        auth: action.payload.auth,
      };
    case SIGN_OUT:
      return { ...state, data: { ...DEFAULT_USER_STATE.data }, auth: false };
    case GET_PROFILE:
      return { ...state, profile: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_USERNAME:
      return { ...state, username: action.payload };
    case UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}
