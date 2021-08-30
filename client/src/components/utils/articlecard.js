import { Link as RouterLink } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div>
      <RouterLink
        to={`/article/${article._id}`}
        style={{ textDecoration: 'none' }}>
        <div className='featuredtrip'>
          <div className='featuredphototext'>
            <p className='featuredphototitle'>
              <b>{article.title}</b>
            </p>
            <p>{article.author} | MORE SPORTS | 101.7k</p>
          </div>
        </div>
      </RouterLink>
    </div>
  );
};

export default ArticleCard;
