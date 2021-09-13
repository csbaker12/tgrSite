import '../../styles/admin.css';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
// import { useState } from 'react';

const AdminForum = (props) => {
  // const [arts, setArts] = useState(true);

  // const setArticles = () => {
  //   setArts(true);
  // };

  // const setForum = () => {
  //   setArts(false);
  // };

  return (
    <div className='adminlayout'>
      <div className=' row'>
        <div className='col-2 adminnav'>
          <List>
            <ListItem button component={RouterLink} to='/admin/articles'>
              <ListItemText primary='Articles' />
            </ListItem>
            <hr />
            <ListItem button component={RouterLink} to='/admin/forum'>
              <ListItemText primary='Forum' />
            </ListItem>
          </List>
        </div>

        <div className='col-10'>Admin Forum</div>
      </div>{' '}
    </div>
  );
};

export default AdminForum;
