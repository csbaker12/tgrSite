import '../../styles/thread.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThread } from '../../store/actions/forum_actions';
import { clearThread } from '../../store/actions';
import AddComment from './addcomment';
import Moment from 'react-moment';

const Thread = (props) => {
  const [loading, setLoading] = useState(true);
  const [showComment, setShowComment] = useState(false);
  const threads = useSelector((state) => state.threads);
  const thread = threads?.current;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThread(props.match.params.id));
    setLoading(false);
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    return () => {
      dispatch(clearThread());
    };
  }, [dispatch]);

  const showCommentForm = () => {
    setShowComment(!showComment);
  };

  return (
    <>
      {loading ? (
        <>
          <p>Loading</p>
        </>
      ) : threads && threads.current ? (
        <>
          <div className='threadwrapper'>
            <div className='threadmain'>
              <div className='threadheader'>
                <p className='threadtitle'>{thread.title}</p>
                <p>
                  By: <span className='threadauthor'>{thread.author}</span>
                </p>
                Posted: <Moment to={thread.date}></Moment>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: thread.content }}
                className='threadcontent'></div>
            </div>
            <br />

            {threads.current.comments
              ? threads.current.comments.map((item) => (
                  <div className='threadcomment'>
                    <div className='threadcommentheader'>
                      <p className='threadcommentauthor'>{item.author}</p>
                      Posted: <Moment to={item.date}></Moment>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content }}
                      className='threadcommentbody'></div>
                  </div>
                ))
              : null}

            <br />
            <button onClick={showCommentForm}>Add Comment</button>
            {showComment ? <AddComment id={props.match.params.id} /> : null}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Thread;
