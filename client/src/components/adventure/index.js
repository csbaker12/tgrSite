import '../../styles/adventure.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link as RouterLink } from 'react-router-dom';

const Adventure = () => {
  return (
    <>
      <div className='adventurewrapper'>
        <h3>Latest in Adventure</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <RouterLink
                to='/article/famouswater/hard'
                style={{ textDecoration: 'none' }}>
                <div className='adventure1'>
                  <div className='adventuretext'>
                    <p>
                      <span className='adventuretitle'>
                        Famous Water in the US
                      </span>
                      <br /> bigmig | Adventure | 215.3k
                    </p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to='/article/wherearecaves/hard'
                style={{ textDecoration: 'none' }}>
                <div className='adventure2'>
                  <div className='adventuretext'>
                    <p>
                      <span className='adventuretitle'>
                        Where to Explore Caves
                      </span>
                      <br /> carlrex | Adventure | 99.8k
                    </p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to='/article/summerviews/hard'
                style={{ textDecoration: 'none' }}>
                <div className='adventure3'>
                  <div className='adventuretext'>
                    <p>
                      <span className='adventuretitle'>Best Summer Views</span>
                      <br /> nurt | adventure | 883.3k
                    </p>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className='col-4 adventurealignmediabar'>
              <div>
                <p>
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
    </>
  );
};

export default Adventure;
