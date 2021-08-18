import { useState } from 'react';
import '../../styles/search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Modal } from '@material-ui/core';
import SearchForm from './searchform';

const Search = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };
  return (
    <>
      <SearchIcon
        style={{ fontSize: '70px', color: 'black' }}
        onClick={() => handleOpen()}
        className='drawer_btn'
      />
      {state ? (
        <Modal open={state} onClose={handleClose}>
          <div className='searchwrapper'>
            <SearchForm />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Search;
