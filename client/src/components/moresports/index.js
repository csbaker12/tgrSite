import '../../styles/moresports.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';

const MoreSports = () => {
  return (
    <>
      <div className='moresportswrapper'>
        <h3>Latest in More Sports</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <div className='moresports1'>
                <div className='moresportstext'>
                  <p>
                    <span className='moresportstitle'>
                      Exploring Slot Canyons
                    </span>
                    <br /> cbakeski | Adventure | 12.6k
                  </p>
                </div>
              </div>
              <div className='moresports2'>
                <div className='moresportstext'>
                  <p>
                    <span className='moresportstitle'>Learning to Climb</span>
                    <br /> bigmig | Adventure | 110.2k
                  </p>
                </div>
              </div>
              <div className='moresports3'>
                <div className='moresportstext'>
                  <p>
                    <span className='moresportstitle'>
                      Fly Fishing the Madison
                    </span>
                    <br /> nurt | Adventure | 44.3k
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4 moresportsalignmediabar'>
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

export default MoreSports;
