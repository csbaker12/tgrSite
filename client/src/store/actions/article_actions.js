import * as articles from './index';
import axios from 'axios';
import { getAuthHeaders } from '../../components/utils/tools';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getArticles = (sort) => {
  return async (dispatch, getState) => {
    try {
      const arts = await axios.post(`/articles/loadmore`, sort);
      const prevArts = getState().articles.articles;
      let newArts = [...arts.data];
      if (prevArts) {
        newArts = [...prevArts, ...arts.data];
      }
      dispatch(articles.getArticles(newArts));
      dispatch(articles.successGlobal('Content Loaded'));
    } catch (error) {
      dispatch(articles.errorGlobal('Error Loading Articles'));
    }
  };
};

export const getArticle = (id) => {
  return async (dispatch) => {
    try {
      const request = await axios.get(`/articles/getbyid/${id}`);
      dispatch(articles.getArticle(request.data));
    } catch (error) {
      dispatch(articles.errorGlobal(error.response.data.message));
    }
  };
};

export const addArticle = (article) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(
        `/articles/admin/addarticle`,
        article,
        getAuthHeaders()
      );
      dispatch(articles.addArticle(request.data));
      dispatch(articles.successGlobal('Article Added'));
    } catch (error) {
      dispatch(articles.errorGlobal(error.response.data.message));
    }
  };
};

export const getPaginateArticles = (page = 1, limit = 10) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(
        `/articles/admin/paginate`,
        {
          page,
          limit,
        },
        getAuthHeaders()
      );
      dispatch(articles.getPaginateArticles(request.data));
    } catch (error) {
      dispatch(articles.errorGlobal(error.response.data.message));
    }
  };
};

export const removeArticle = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/articles/admin/${id}`, getAuthHeaders());
      dispatch(articles.removeArticle());
      dispatch(articles.successGlobal('Article Removed'));
    } catch (error) {
      dispatch(articles.errorGlobal(error.response.data.message));
    }
  };
};
