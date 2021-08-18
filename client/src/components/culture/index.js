import '../../styles/culture.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';

const Culture = () => {
  return (
    <>
      <div className='culturewrapper'>
        <h3>Latest in Culture</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
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
