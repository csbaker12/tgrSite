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
  ADD_THREAD,
  GET_THREADS,
  GET_THREAD,
  CLEAR_THREAD,
  ADD_COMMENT,
  GET_ADMIN_THREADS,
  REMOVE_THREAD,
  GET_PROFILE,
  UPDATE_EMAIL,
  UPDATE_PROFILE,
  UPDATE_USERNAME,
  ACCOUNT_VERIFY,
  EMAIL_SIGNUP,
  ARTICLE_SEARCH,
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

export const articleSearch = (articles) => ({
  type: ARTICLE_SEARCH,
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

///////user actions
export const authUser = (user) => ({
  type: AUTH_USER,
  payload: user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const getProfile = (profile) => ({
  type: GET_PROFILE,
  payload: profile,
});

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  payload: username,
});

export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

export const accountVerify = () => ({
  type: ACCOUNT_VERIFY,
});

export const emailSignup = (email) => ({
  type: EMAIL_SIGNUP,
  payload: email,
});

///thread actions
export const addThread = (thread) => ({
  type: ADD_THREAD,
  payload: thread,
});

export const getThreads = (threads) => ({
  type: GET_THREADS,
  payload: threads,
});

export const getThread = (thread) => ({
  type: GET_THREAD,
  payload: thread,
});

export const clearThread = () => ({
  type: CLEAR_THREAD,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const getPaginateThreads = (threads) => ({
  type: GET_ADMIN_THREADS,
  payload: threads,
});

export const removeThread = () => ({
  type: REMOVE_THREAD,
});
