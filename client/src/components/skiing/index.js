import '../../styles/skiing.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';

const Skiing = () => {
  return (
    <>
      <div className='skiingwrapper'>
        <h3>Latest in Skiing</h3>
        <hr />
        <div className='row'>
          <div className='align'>
            <div className='col-8'>
              <div className='skiing1'>
                <div className='skiingtext'>
                  <p>
                    <span className='skiingtitle'>
                      The Dangers of Friendship
                    </span>
                    <br /> cbakeski | Skiing | 766.4k
                  </p>
                </div>
              </div>
              <div className='skiing2'>
                <div className='skiingtext'>
                  <p>
                    <span className='skiingtitle'>Winter as a Bum</span>
                    <br /> carlrex | Skiing | 53.8k
                  </p>
                </div>
              </div>
              <div className='skiing3'>
                <div className='skiingtext'>
                  <p>
                    <span className='skiingtitle'>Chasing the Whiteroom</span>
                    <br /> thebois | Skiing | 49.4k
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4 skiingalignmediabar'>
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

export default Skiing;
