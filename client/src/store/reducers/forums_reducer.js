import {
  ADD_THREAD,
  GET_THREADS,
  GET_THREAD,
  CLEAR_THREAD,
  ADD_COMMENT,
  GET_ADMIN_THREADS,
} from '../types';

export default function threadReducer(state = {}, action) {
  switch (action.type) {
    case ADD_THREAD:
      return { ...state, lastThreadAdded: action.payload, success: true };
    case GET_THREADS:
      return { ...state, threads: action.payload };
    case GET_THREAD:
      return { ...state, current: action.payload };
    case CLEAR_THREAD:
      return { ...state, current: null };
    case ADD_COMMENT:
      return { ...state, commentAdded: action.payload };
    case GET_ADMIN_THREADS:
      return { ...state, adminThreads: action.payload };

    default:
      return state;
  }
}
