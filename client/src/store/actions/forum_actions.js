import * as threads from './index';
import axios from 'axios';
import { getAuthHeaders } from '../../components/utils/tools';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const addThread = (thread) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(
        `/forum/createthread`,
        thread,
        getAuthHeaders()
      );
      dispatch(threads.addThread(request.data));
      dispatch(threads.successGlobal('Thread Added'));
    } catch (error) {
      dispatch(threads.errorGlobal(error.response.data.message));
    }
  };
};

export const getThreads = (sort) => {
  return async (dispatch, getState) => {
    try {
      const thrds = await axios.post(`/forum/loadmore`, sort);
      //   const prevThreads = getState().threads.threads;
      //   let newThreads = [...threads.data];
      //   if (prevThreads) {
      //     newThreads = [...prevThreads, ...threads.data];
      //   }
      //   dispatch(threads.getThreads(newThreads));
      //   dispatch(threads.getThreads(threads.data));
      //   dispatch(threads.successGlobal('Content Loaded'));
      dispatch(threads.getThreads(thrds.data));
      dispatch(threads.successGlobal('Content Loaded'));
    } catch (error) {
      dispatch(threads.errorGlobal('error loading threads'));
    }
  };
};

export const getThread = (id) => {
  return async (dispatch) => {
    const request = await axios.get(`/forum/thread/${id}`);
    dispatch(threads.getThread(request.data));

    try {
    } catch (error) {
      dispatch(threads.errorGlobal('Error retrieving thread'));
    }
  };
};

export const addComment = (comment, id) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `/forum/thread/${id}/addcomment`,
        comment,
        getAuthHeaders()
      );
      dispatch(threads.addComment(comment));
      dispatch(threads.successGlobal('Comment Added'));
    } catch (error) {
      dispatch(threads.errorGlobal(error.response.data.message));
    }
  };
};

export const getPaginateThreads = (page = 1, limit = 10) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(
        `/forum/paginate`,
        {
          page,
          limit,
        },
        getAuthHeaders()
      );
      dispatch(threads.getPaginateThreads(request.data));
    } catch (error) {
      dispatch(threads.errorGlobal(error.response.data.message));
    }
  };
};

export const removeThread = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/forum/thread/${id}`, getAuthHeaders());
      dispatch(threads.removeThread());
      dispatch(threads.successGlobal('Thread Removed'));
    } catch (error) {
      dispatch(threads.errorGlobal(error.response.data.message));
    }
  };
};
