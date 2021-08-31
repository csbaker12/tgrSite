import * as articles from './index';
import axios from 'axios';

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
