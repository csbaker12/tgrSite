import {
  GET_ARTICLES,
  ERROR_GLOBAL,
  SUCCESS_GLOBAL,
  CLEAR_NOTIFICATION,
  AUTH_USER,
} from '../types';

///////articles actions

export const getArticles = (articles) => ({
  type: GET_ARTICLES,
  payload: articles,
});

/////notifications actions
export const errorGlobal = (msg) => ({
  type: ERROR_GLOBAL,
  payload: msg,
});

export const successGlobal = (msg) => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotifications = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  };
};

///////auth actions
export const authUser = (user) => ({
  type: AUTH_USER,
  payload: user,
});
