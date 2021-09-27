import '../../styles/gear.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link as RouterLink } from 'react-router-dom';

const Gear = () => {
  return (
    <>
      <div className='gearwrapper'>
        <h3>Latest in Gear and Tech</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <RouterLink
                to='/article/howmuchistoomuch/hard'
                style={{ textDecoration: 'none' }}>
                <div className='gear1'>
                  <div className='geartext'>
                    <p>
                      <span className='geartitle'>How Much is Too Much?</span>
                      <br /> cbakeski | Gear/Tech | 0
                    </p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to='/article/bozeflyworksreview/hard'
                style={{ textDecoration: 'none' }}>
                <div className='gear2'>
                  <div className='geartext'>
                    <p>
                      <span className='geartitle'>BozeFlyWorks Review</span>
                      <br /> carlrex | Gear/Tech | 246.7k
                    </p>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className='col-4 gearalignmediabar'>
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

export default Gear;
