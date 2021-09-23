import { useState, useReducer, useEffect } from 'react';
import '../../styles/forums.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getThreads } from '../../store/actions/forum_actions';
import ThreadCard from '../utils/threadcard';

const initialState = { sortBy: '_id', order: 'desc', limit: 20, skip: 0 };

const Forums = () => {
  const [ski, setSki] = useState(true);
  const [bike, setBike] = useState(true);
  const [adventure, setAdventure] = useState(true);
  const [gear, setGear] = useState(true);
  const [connections, setConnections] = useState(true);
  const [media, setMedia] = useState(true);
  const [chatter, setChatter] = useState(true);
  const [tech, setTech] = useState(true);

  const handleSki = () => {
    setSki(!ski);
  };

  const handleBike = () => {
    setBike(!bike);
  };

  const handleAdventure = () => {
    setAdventure(!adventure);
  };

  const handleGear = () => {
    setGear(!gear);
  };

  const handleConnections = () => {
    setConnections(!connections);
  };

  const handleMedia = () => {
    setMedia(!media);
  };

  const handleChatter = () => {
    setChatter(!chatter);
  };

  const handleTech = () => {
    setTech(!tech);
  };

  const [sort, setSort] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
  const threads = useSelector((state) => state.threads);
  const dispatch = useDispatch();

  useEffect(() => {
    if (threads && !threads.threads) {
      dispatch(getThreads(initialState));
    }
  }, [dispatch, threads]);

  return (
    <>
      <div className='forumswrapper'>
        <h4>TETON GRAVITY RESEARCH FORUMS</h4>
        <p>
          Welcome to the TGR Forums and the biggest and most honest conversation
          in the outdoor world! For guidelines about the forums, check out our
          Roolz. For info about what’s changing in the forums, see our FAQ.
        </p>
        <div>
          <div className='row'>
            <div className='align'>
              <div className='col-10'>
                <div className='forum'>
                  <div className='row forumlabel'>
                    <div className='col-8'>SKI/SNOWBOARD</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleSki()}>
                      {ski ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Your place for all things skiing and snowboarding
                  </p>

                  {ski && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'ski'} />
                      ))
                    : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>BIKE</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleBike()}>
                      {bike ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Bike junkies check in here!
                  </p>

                  {bike && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'bike'} />
                      ))
                    : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>ADVENTURE/OTHER SPORTS</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleAdventure()}>
                      {adventure ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Enjoy the outdoors. Your place for surfing, kayaking,
                    fishing, climbing and anything outdoors!
                  </p>
                  {adventure && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'adventure'} />
                      ))
                    : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>GEAR & BUY/SELL</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleGear()}>
                      {gear ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Talk about equipment, buy and sell gear
                  </p>
                  {gear && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'gear'} />
                      ))
                    : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>CONNECTIONS</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleConnections()}>
                      {connections ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Find jobs, rides, fellow gimps, shred partners mountain meet
                    ups and more
                  </p>
                  {connections && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'connections'} />
                      ))
                    : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>MEDIA & ARTS</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleMedia()}>
                      {media ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>Media talk here!</p>
                  {media && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'media'} />
                      ))
                    : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>CHATTER, BLATHER & ARCHIVES</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleChatter()}>
                      {chatter ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Random stuff and old stuff!
                  </p>

                  {chatter && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'chatter'} />
                      ))
                    : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>TECH SUPPORT</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleTech()}>
                      {tech ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Check in here to ask TGR that question that's been driving
                    you nuts!
                  </p>
                  {tech && threads.threads
                    ? threads.threads.map((item) => (
                        <ThreadCard thread={item} cat={'tech'} />
                      ))
                    : null}
                </div>
              </div>
              <div className='col-2 alignmediabar'>
                <div>
                  <p>
                    <b>THE STASH</b>
                  </p>
                  <RouterLink
                    to='/thread/new'
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <p>
                      UPLOAD YOUR OWN: <VideocamIcon /> <CameraAltIcon />{' '}
                      <DescriptionIcon />
                    </p>
                  </RouterLink>

                  <p>
                    <b>POPULAR THIS WEEK ON TGR:</b>
                  </p>

                  <p>
                    <b>FEATURED TGR STASH PICK</b>
                  </p>
                  <p>
                    <b>FEATURED TRIP REPORT</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forums;
