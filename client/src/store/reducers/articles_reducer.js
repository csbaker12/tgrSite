import {
  GET_ARTICLES,
  GET_ARTICLE,
  CLEAR_ARTICLE,
  ADD_ARTICLE,
  GET_ADMIN_ARTICLES,
} from '../types';

export default function articleReducer(state = {}, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.payload };
    case GET_ARTICLE:
      return { ...state, current: action.payload };
    case CLEAR_ARTICLE:
      return { ...state, current: null };
    case ADD_ARTICLE:
      return { ...state, lastAdded: action.payload, success: true };
    case GET_ADMIN_ARTICLES:
      return { ...state, adminArticles: action.payload };
    default:
      return state;
  }
}
