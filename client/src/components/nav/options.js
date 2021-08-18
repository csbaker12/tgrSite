import { useState } from 'react';
import '../../styles/options.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import OptionsCard from './optionscard';
import Modal from '@material-ui/core/Modal';

const Options = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  return (
    <>
      <DehazeIcon
        onClick={() => handleOpen()}
        style={{ fontSize: '90px', color: 'black' }}
        className='drawer_btn'
      />
      {state ? (
        <Modal open={state} onClose={handleClose} onClick={handleClose}>
          <div className='optionswrapper'>
            <OptionsCard />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Options;
