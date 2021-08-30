import '../../styles/stash.css';
import { useReducer, useEffect } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../store/actions/article_actions';
import ArticleCard from '../utils/articlecard';

const initialSort = { sortBy: '_id', order: 'desc', limit: 9, skip: 0 };

const Stash = () => {
  const [sort, setSort] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialSort
  );
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles && !articles.articles) {
      dispatch(getArticles(initialSort));
    }
  }, [dispatch, articles]);

  return (
    <div className='stashheader'>
      <hr />
      <div>
        <p>
          <a href='/join'>Join The Stash</a> | Find Members | Athletes | Forums
          | Contests | FAQ
        </p>
      </div>
      <hr />
      <div className='row'>
        <div className='align'>
          <div className='col-8 '>
            <p className='stashhomelabel'>
              <b>FEATURED TGR PICK</b>
            </p>
            <RouterLink to='/article' style={{ textDecoration: 'none' }}>
              <div className='featuredpick'>
                <div className='featuredpickcontent'>
                  <p className='featuredtitle'>
                    <b>Mega Road Trip</b>
                  </p>
                  <p>cbakeski | ADVENTURE | 10k views</p>
                </div>
              </div>
            </RouterLink>
            <div className='row'>
              <div className='col-6'>
                <hr />
                <p className='stashhomelabel'>
                  <b>FEATURED PHOTO</b>
                </p>
                <hr />
                <RouterLink to='/article' style={{ textDecoration: 'none' }}>
                  <div className='featuredphoto'>
                    <div className='featuredphototext'>
                      <p className='featuredphototitle'>
                        <b>Titcomb Basin</b>
                      </p>
                      <p>TGR | ADVENTURE | 5.2k</p>
                    </div>
                  </div>
                </RouterLink>
              </div>
              <div className='col-6'>
                <hr />
                <p className='stashhomelabel'>
                  <b>FEATURED TRIP REPORT</b>
                </p>
                <hr />
                <RouterLink to='/article' style={{ textDecoration: 'none' }}>
                  <div className='featuredtrip'>
                    <div className='featuredphototext'>
                      <p className='featuredphototitle'>
                        <b>GNP</b>
                      </p>
                      <p>urboibob | ADVENTURE | 17.6k</p>
                    </div>
                  </div>
                </RouterLink>
              </div>
              <div>
                <hr />
                <p className='stashhomelabel'>
                  <b>POPULAR VIDEOS</b>
                </p>
                <hr />
                <div className='row'>
                  <div className='col-6'>
                    <RouterLink
                      to='/article'
                      style={{ textDecoration: 'none' }}>
                      <div className='popularvideoback'>
                        <div className='featuredphototext'>
                          <p className='featuredphototitle'>
                            <b>Chasing Hogs</b>
                          </p>
                          <p>cbakeski | MORE SPORTS | 22.1k</p>
                        </div>
                      </div>
                    </RouterLink>
                  </div>
                  <div className='col-6'>
                    <RouterLink
                      to='/article'
                      style={{ textDecoration: 'none' }}>
                      <div className='popularvideoback2'>
                        <div className='featuredphototext'>
                          <p className='featuredphototitle'>
                            <b>Powder Seeker</b>
                          </p>
                          <p>bigmig | SKI | 76.1k</p>
                        </div>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <p className='stashhomelabel'>
                  <b>POPULAR STORIES</b>
                </p>
                <hr />
                <div className='row'>
                  <div className='col-6'>
                    <RouterLink
                      to='/article'
                      style={{ textDecoration: 'none' }}>
                      <div className='popularstoryback'>
                        <div className='featuredphototext'>
                          <p className='featuredphototitle'>
                            <b>High Elevation Camping</b>
                          </p>
                          <p>bpski | ADVENTURE | 4.4k</p>
                        </div>
                      </div>
                    </RouterLink>
                  </div>
                  <div className='col-6'>
                    <RouterLink
                      to='/article'
                      style={{ textDecoration: 'none' }}>
                      <div className='popularstoryback2'>
                        <div className='featuredphototext'>
                          <p className='featuredphototitle'>
                            <b>Choss God</b>
                          </p>
                          <p>Nurt | MORE SPORTS | 101.7k</p>
                        </div>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4 alignmediabar'>
            <p className='stashhomelabel'>
              <b>THE STASH</b>
            </p>
            <p>
              UPLOAD YOUR OWN: <VideocamIcon /> <CameraAltIcon />{' '}
              <DescriptionIcon />
            </p>
            <p className='stashhomelabel'>
              <b>POPULAR RIGHT NOW:</b>
            </p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <hr />
            <RouterLink to='/' style={{ textDecoration: 'none' }}>
              <p style={{ textAlign: 'center', color: 'black' }}>
                <FilterHdrIcon /> <b>See More Good Stuff</b>
              </p>
            </RouterLink>
            <hr />
            <p className='stashhomelabel'>
              <b>CONNECT WITH TGR</b>
            </p>
            <p>Links would go here</p>
            <p className='stashhomelabel'>
              <b>GET TGR EMAIL UPDATES</b>
            </p>
            <form>
              <input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                style={{
                  textAlign: 'center',
                  color: 'black',
                  width: '80%',
                }}></input>
              <button type='submit' className='footersend'>
                SEND IT
              </button>
            </form>
            <p className='stashhomelabel'>
              <b>FORUM CONVERSATIONS</b>
            </p>
            <p>No forum content to show</p>
          </div>
        </div>
      </div>
      <hr />
      <p className='stashhomelabel'>
        <b>MORE FROM THE STASH</b>
      </p>
      <hr />
      <div>
        {articles && articles.articles
          ? articles.articles.map((item) => <ArticleCard article={item} />)
          : null}
      </div>
      <div>
        <button
          onClick={() => {
            let skip = sort.skip + sort.limit;
            dispatch(getArticles({ ...sort, skip: skip }));
            setSort({ skip: skip });
          }}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Stash;
