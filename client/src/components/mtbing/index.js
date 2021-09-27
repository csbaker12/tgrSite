import '../../styles/biking.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link as RouterLink } from 'react-router-dom';

const MTBing = () => {
  return (
    <>
      <div className='bikingwrapper'>
        <h3>Latest in Biking</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <RouterLink
                to='/article/exploringtrestle/hard'
                style={{ textDecoration: 'none' }}>
                <div className='biking1'>
                  <div className='bikingtext'>
                    <p>
                      <span className='bikingtitle'>Exploring Trestle</span>
                      <br /> bpski | Biking | 135.2k
                    </p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to='/article/bikingcolorado/hard'
                style={{ textDecoration: 'none' }}>
                <div className='biking2'>
                  <div className='bikingtext'>
                    <p>
                      <span className='bikingtitle'>Biking Colorado</span>
                      <br /> camsmonth | Biking | 6.5k
                    </p>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className='col-4 bikingalignmediabar'>
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

export default MTBing;
