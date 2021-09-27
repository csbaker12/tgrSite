import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ArticleCard from '../utils/articlecard';
import '../../styles/search.css';

const SearchResults = (props) => {
  const articles = useSelector((state) => state.articles);
  const query = new URLSearchParams(props.location.search);
  const keywords = query.get('keywords');

  return (
    <div className='searchresultswrapper'>
      {articles.usersearch && articles.usersearch.docs ? (
        <>
          <p>
            Your search for <b>'{keywords}</b> returned{' '}
            <b>{articles.usersearch.totalDocs}</b> results
          </p>
          <Grid container spacing={2}>
            {articles.usersearch.docs.map((item) => (
              <Grid key={item._id} item xs={12} sm={6} lg={3}>
                <ArticleCard article={item} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
    </div>
  );
};

export default SearchResults;
