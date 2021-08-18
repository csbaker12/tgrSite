import { useState } from 'react';
import '../../styles/settings.css';
import SettingsIcon from '@material-ui/icons/Settings';
import { Modal } from '@material-ui/core';
import SettingsForm from './settingsform';

const Settings = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };
  return (
    <>
      <SettingsIcon
        style={{ fontSize: '70px', color: 'black' }}
        onClick={() => handleOpen()}
        className='drawer_btn'
      />
      {state ? (
        <Modal open={state} onClose={handleClose} onClick={handleClose}>
          <div className='settingswrapper'>
            <SettingsForm />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Settings;
