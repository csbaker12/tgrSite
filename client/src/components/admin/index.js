import '../../styles/admin.css';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

const Admin = (props) => {
  // const [arts, setArts] = useState(true);

  // const setArticles = () => {
  //   setArts(true);
  // };

  // const setForum = () => {
  //   setArts(false);
  // };

  // const user = useSelector((state) => state.users);

  // useEffect(() => {
  //   console.log(user);
  //   if (user.auth) {
  //     props.history.push('/');
  //   } else {
  //   }
  // }, [user, props.history]);
  return (
    <>
      <div className=' row adminlayout'>
        <div className='col-2'></div>
        <div className='col-1 adminnav'>
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
        <div className='col-2'></div>

        <div className='col-5'>Admin Articles</div>
        <div className='col-2'></div>
      </div>
    </>
  );
};

export default Admin;
