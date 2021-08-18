import '../../styles/gear.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';

const Gear = () => {
  return (
    <>
      <div className='gearwrapper'>
        <h3>Latest in Gear and Tech</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <div className='gear1'>
                <div className='geartext'>
                  <p>
                    <span className='geartitle'>How Much is Too Much?</span>
                    <br /> cbakeski | Gear/Tech | 0
                  </p>
                </div>
              </div>
              <div className='gear2'>
                <div className='geartext'>
                  <p>
                    <span className='geartitle'>BozeFlyWorks Review</span>
                    <br /> carlrex | Gear/Tech | 246.7k
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4 gearalignmediabar'>
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

export default Gear;
