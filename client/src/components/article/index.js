import '../../styles/article.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../../store/actions/article_actions';
import { clearArticle } from '../../store/actions';

const Article = (props) => {
  const [loading, setLoading] = useState(true);
  const articles = useSelector((state) => state.articles);
  const current = articles?.current;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle(props.match.params.id));
    setLoading(false);
  }, [dispatch, props.match.params]);

  useEffect(() => {
    return () => {
      dispatch(clearArticle());
    };
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <>
          <p>Loading</p>
        </>
      ) : (
        <div className='articlebg'>
          <div className='articletext'>
            {current ? <p>{current.author}</p> : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
