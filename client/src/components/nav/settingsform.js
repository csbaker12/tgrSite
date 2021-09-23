import { NavLink } from 'react-router-dom';
import '../../styles/settings.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../store/actions/users_actions';

const SettingsForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const signOutUser = () => {
    dispatch(signOut());
    history.push('/');
    console.log('done');
  };

  return (
    <>
      <div className='settingscontent'>
        <NavLink to='/join' className='settingsitem'>
          Sign In
        </NavLink>
        <br />
        <div
          className='settingsitem'
          onClick={() => {
            signOutUser();
          }}>
          Sign Out
        </div>
        <NavLink to='/admin/articles' className='settingsitem'>
          Admin
        </NavLink>
        <br />
        <NavLink to='/profile' className='settingsitem'>
          Profile
        </NavLink>
        <br />
        <hr className='settingsdivider' />
        <NavLink to='/forums' className='settingsitem'>
          New Posts
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Gear Swap
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Ski / Snowboard
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Sprocket Rockets
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Tech Talk
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Trip Reports
        </NavLink>
        <br />
        <hr className='settingsdivider' />
        <NavLink to='/stash' className='settingsitem'>
          The Stash
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Add a Story
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Add a Video
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Add Photos
        </NavLink>
        <br />
        <NavLink to='/contests' className='settingsitem'>
          Contests
        </NavLink>
        <br />
        <NavLink to='/forums' className='settingsitem'>
          Help-FAQ
        </NavLink>
        <br />
      </div>
    </>
  );
};

export default SettingsForm;
