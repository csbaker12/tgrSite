import '../../styles/snowboarding.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link as RouterLink } from 'react-router-dom';

const Snowboarding = () => {
  return (
    <>
      <div className='snowboardingwrapper'>
        <h3>Latest in Snowboarding</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <RouterLink to='/article' style={{ textDecoration: 'none' }}>
                <div className='snowboarding1'>
                  <div className='snowboardingtext'>
                    <p>
                      <span className='snowboardingtitle'>
                        Splitboarding Colorado
                      </span>
                      <br /> tbetty | Snowboarding | 412.4k
                    </p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink to='/article' style={{ textDecoration: 'none' }}>
                <div className='snowboarding2'>
                  <div className='snowboardingtext'>
                    <p>
                      <span className='snowboardingtitle'>
                        Spring Snowboarding
                      </span>
                      <br /> tbetty | Snowboarding | 59.8k
                    </p>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className='col-4 snowboardingalignmediabar'>
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

export default Snowboarding;
