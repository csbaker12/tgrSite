import '../../styles/culture.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link as RouterLink } from 'react-router-dom';

const Culture = () => {
  return (
    <>
      <div className='culturewrapper'>
        <h3>Latest in Culture</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <RouterLink to='/tours' style={{ textDecoration: 'none' }}>
                <div className='culture1'>
                  <div className='culturetext'>
                    <p>
                      <span className='culturetitle'>
                        2021 Film Tour Schedule
                      </span>
                      <br /> TGR | culture | 445.6k
                    </p>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className='col-4 culturealignmediabar'>
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

export default Culture;
