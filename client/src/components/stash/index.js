import '../../styles/stash.css';
import { useReducer, useEffect, useState } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../store/actions/article_actions';
import ArticleCard from '../utils/articlecard';
import { Button, MenuItem, FormControl, Select } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialSort = { sortBy: '_id', order: 'desc', limit: 9, skip: 0 };

const Stash = () => {
  const [sort, setSort] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialSort
  );
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const [allCats, setAllCats] = useState(true);
  const [ski, setSki] = useState(false);
  const [snowboard, setSnowboard] = useState(false);
  const [bike, setBike] = useState(false);
  const [surf, setSurf] = useState(false);
  const [adventure, setAdventure] = useState(false);
  const [gear, setGear] = useState(false);
  const [culture, setCulture] = useState(false);
  const [news, setNews] = useState(false);
  const [moreSports, setMoreSports] = useState(false);
  const [films, setFilms] = useState(false);

  let filtercat = 'AllCats';

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { filterby: 'AllCats' },
    validationSchema: Yup.object({
      // sortby: Yup.string().required('This is required'),
      filterby: Yup.string().required('This is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      filtercat = values.filterby;
      changeState(filtercat);

      // const sortby = values.sortby;
    },
  });

  const changeState = (filtercat) => {
    toggleCategories();

    if (filtercat === 'AllCats') {
      setAllCats(true);
    }
    if (filtercat === 'Ski') {
      setSki(true);
    }
    if (filtercat === 'Snowboard') {
      setSnowboard(true);
    }
    if (filtercat === 'Bike') {
      setBike(true);
    }
    if (filtercat === 'Surf') {
      setSurf(true);
    }
    if (filtercat === 'Adventure') {
      setAdventure(true);
    }
    if (filtercat === 'Gear') {
      setGear(true);
    }
    if (filtercat === 'Culture') {
      setCulture(true);
    }
    if (filtercat === 'News') {
      setNews(true);
    }
    if (filtercat === 'MoreSports') {
      setMoreSports(true);
    }
    if (filtercat === 'Films') {
      setFilms(true);
    }
  };

  const toggleCategories = () => {
    setAllCats(false);
    setSki(false);
    setSnowboard(false);
    setBike(false);
    setSurf(false);
    setAdventure(false);
    setGear(false);
    setCulture(false);
    setNews(false);
    setMoreSports(false);
    setFilms(false);
  };

  // const errorHelper = (formik, values) => ({
  //   error: formik.errors[values] && formik.touched[values] ? true : false,
  //   helperText:
  //     formik.errors[values] && formik.touched[values]
  //       ? formik.errors[values]
  //       : null,
  // });

  // const sortby = 'mostrecent';

  // const filterStash = (cat) => {
  //   filterby = cat;
  //   if (filterby === 'allcats') {
  //     setFilters(false);
  //   }
  //   // const sortby = values.sortby;
  //   else {
  //     setFilters(true);
  //   }
  // };

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
              <RouterLink
                to='/thread/new'
                style={{ textDecoration: 'none', color: 'black' }}>
                <p>
                  UPLOAD YOUR OWN: <VideocamIcon /> <CameraAltIcon />{' '}
                  <DescriptionIcon />
                </p>
              </RouterLink>
            </p>
            <p className='stashhomelabel'>
              <b>POPULAR RIGHT NOW:</b>
            </p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <hr />
            <RouterLink to='/stash' style={{ textDecoration: 'none' }}>
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
      <form onSubmit={formik.handleSubmit}>
        <div className='stashhomelabel row'>
          <div className='col-6'>
            <p>
              <b>MORE FROM THE STASH</b>
            </p>
          </div>
          {/* <div className='col-2'>
            <p>
              <b>Filter Results:</b>
            </p>
          </div> */}
          {/* <div className='col-2'>
            <FormControl>
              <h5>Sort By</h5>
              <Select
                name='sortby'
                {...formik.getFieldProps('sortby')}
                error={
                  formik.errors.sortby && formik.touched.sortby ? true : false
                }>
                <MenuItem value='mostrecent'>Most Recent</MenuItem>
                <MenuItem value='popular'>Popular This Week</MenuItem>
                <MenuItem value='views'>Most Views</MenuItem>
              </Select>
            </FormControl>
          </div> */}

          <div className='col-3'>
            <FormControl>
              <h5>Filter By</h5>
              <Select
                name='filterby'
                {...formik.getFieldProps('filterby')}
                error={
                  formik.errors.filterby && formik.touched.filterby
                    ? true
                    : false
                }>
                <MenuItem value='AllCats'>All Categories</MenuItem>
                <MenuItem value='Ski'>Ski</MenuItem>
                <MenuItem value='Snowboard'>Snowboard</MenuItem>
                <MenuItem value='Bike'>Bike</MenuItem>
                <MenuItem value='Surf'>Surf</MenuItem>
                <MenuItem value='Adventure'>Adventure</MenuItem>
                <MenuItem value='Gear'>Gear Buy/Sell</MenuItem>
                <MenuItem value='Culture'>Culture</MenuItem>
                <MenuItem value='News'>News</MenuItem>
                <MenuItem value='MoreSports'>More Sports</MenuItem>
                <MenuItem value='Films'>Films</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='col-3'>
            <Button variant='contained' color='primary' type='submit'>
              Apply
            </Button>
          </div>
        </div>
      </form>

      <hr />
      <div className='articleloaderformat row'>
        {articles && articles.articles && allCats
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'allcats'} />
              </div>
            ))
          : null}

        {articles && articles.articles && ski
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'ski'} />
              </div>
            ))
          : null}

        {articles && articles.articles && snowboard
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'board'} />
              </div>
            ))
          : null}

        {articles && articles.articles && bike
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'bike'} />
              </div>
            ))
          : null}

        {articles && articles.articles && surf
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'surf'} />
              </div>
            ))
          : null}

        {articles && articles.articles && adventure
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'adventure'} />
              </div>
            ))
          : null}

        {articles && articles.articles && gear
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'gear'} />
              </div>
            ))
          : null}

        {articles && articles.articles && culture
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'culture'} />
              </div>
            ))
          : null}

        {articles && articles.articles && news
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'news'} />
              </div>
            ))
          : null}

        {articles && articles.articles && moreSports
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'more'} />
              </div>
            ))
          : null}

        {articles && articles.articles && films
          ? articles.articles.map((item) => (
              <div className='col-4'>
                <ArticleCard article={item} cat={'films'} />
              </div>
            ))
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
