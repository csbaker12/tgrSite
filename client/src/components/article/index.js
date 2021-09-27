import '../../styles/article.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../../store/actions/article_actions';
import { clearArticle } from '../../store/actions';
import Moment from 'react-moment';
import createTypography from '@material-ui/core/styles/createTypography';

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
        <>
          <div className='articlewrap'>
            {current ? (
              <>
                <div className=' articletitlewrap'>
                  <div>
                    <p className='articletitle'>{current.title}</p>
                    <p className='articlesubtitle'>
                      By: <i>{current.author}</i>
                      {/* Posted:{' '}
                      <i>
                        <Moment to={current.date}></Moment>
                      </i> */}
                    </p>
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: current.content }}></div>
              </>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default Article;
