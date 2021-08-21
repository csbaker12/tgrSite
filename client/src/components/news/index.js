import '../../styles/news.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link as RouterLink } from 'react-router-dom';

const News = () => {
  return (
    <>
      <div className='newswrapper'>
        <h3>Latest in News</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <RouterLink to='/article' style={{ textDecoration: 'none' }}>
                <div className='news1'>
                  <div className='newstext'>
                    <p>
                      <span className='newstitle'>Wildfire Season Update</span>
                      <br /> TGR | News | 934.2k
                    </p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink to='/article' style={{ textDecoration: 'none' }}>
                <div className='news2'>
                  <div className='newstext'>
                    <p>
                      <span className='newstitle'>
                        What Can We Do to Curb Wildfires?
                      </span>
                      <br /> cbakeski | News | 423.7k
                    </p>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className='col-4 newsalignmediabar'>
              <div>
                <p>
                  <b>THE STASH</b>
                </p>
                <p>
                  UPLOAD YOUR OWN: <VideocamIcon /> <CameraAltIcon />{' '}
                  <DescriptionIcon />
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

export default News;
