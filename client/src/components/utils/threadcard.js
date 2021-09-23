import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Moment from 'react-moment';
import { Link as RouterLink } from 'react-router-dom';

const ThreadCard = ({ thread, cat }) => {
  return (
    <>
      {thread.category === cat ? (
        <div className='forumentry'>
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-1'>
                  <RouterLink
                    to={`/thread/${thread._id}`}
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <InsertDriveFileIcon style={{ fontSize: '50px' }} />
                  </RouterLink>
                </div>
                <div className='col-11'>
                  <RouterLink
                    to={`/thread/${thread._id}`}
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <p>
                      <b>{thread.title}</b>
                    </p>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <p>Comements: 151</p>
            </div>
            <div className='col-2'>
              <p>
                By <b>{thread.author}</b>
              </p>
              <Moment to={thread.date}></Moment>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ThreadCard;
