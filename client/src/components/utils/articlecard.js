import { Link as RouterLink } from 'react-router-dom';
import '../../styles/articlecard.css';

const ArticleCard = ({ article, cat }) => {
  // console.log(article.category);
  // console.log(cat);
  return (
    <>
      {cat === 'allcats' ? (
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
                  {article.author} | {article.category} | 101.7k
                </p>
              </div>
            </div>
          </RouterLink>
        </span>
      ) : null}
      {article.category === cat && cat !== 'allcats' ? (
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
                  {article.author} | {article.category} | 101.7k
                </p>
              </div>
            </div>
          </RouterLink>
        </span>
      ) : null}
    </>
  );
};

export default ArticleCard;
