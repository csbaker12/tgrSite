import { NavLink } from 'react-router-dom';
import '../../styles/settings.css';

const SettingsForm = () => {
  return (
    <>
      <div className='settingscontent'>
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
