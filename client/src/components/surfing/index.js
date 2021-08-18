import '../../styles/surfing.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';

const Surfing = () => {
  return (
    <>
      <div className='surfingwrapper'>
        <h3>Latest in Surfing</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <div className='surfing1'>
                <div className='surfingtext'>
                  <p>
                    <span className='surfingtitle'>Surfing Oregon</span>
                    <br /> wavehunter | Surfing | 366.9k
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4 surfingalignmediabar'>
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

export default Surfing;
