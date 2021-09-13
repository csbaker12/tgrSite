import {
  GET_ARTICLES,
  ERROR_GLOBAL,
  SUCCESS_GLOBAL,
  CLEAR_NOTIFICATION,
  AUTH_USER,
  SIGN_OUT,
  GET_ARTICLE,
  CLEAR_ARTICLE,
  ADD_ARTICLE,
  GET_ADMIN_ARTICLES,
  REMOVE_ARTICLE,
} from '../types';

///////articles actions

export const getArticles = (articles) => ({
  type: GET_ARTICLES,
  payload: articles,
});

export const getArticle = (article) => ({
  type: GET_ARTICLE,
  payload: article,
});

export const clearArticle = () => ({
  type: CLEAR_ARTICLE,
});

export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  payload: article,
});

export const getPaginateArticles = (articles) => ({
  type: GET_ADMIN_ARTICLES,
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

export const removeArticle = () => ({
  type: REMOVE_ARTICLE,
});

///////auth actions
export const authUser = (user) => ({
  type: AUTH_USER,
  payload: user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
