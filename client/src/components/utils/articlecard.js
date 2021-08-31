import { Link as RouterLink } from 'react-router-dom';
import '../../styles/articlecard.css';

const ArticleCard = ({ article }) => {
  return (
    <span>
      <RouterLink
        to={`/article/${article._id}`}
        style={{ textDecoration: 'none' }}>
        <div className='articlecardwrap'>
          <div className='featuredphototext'>
            <p className='featuredphototitle'>
              <b>{article.title}</b>
            </p>
            <p className='featuredphotocontent'>
              {article.author} | MORE SPORTS | 101.7k
            </p>
          </div>
        </div>
      </RouterLink>
    </span>
  );
};

export default ArticleCard;
