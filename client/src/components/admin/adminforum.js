import '../../styles/admin.css';
import { useState } from 'react';
import { Input, List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Modal,
  Button,
  ButtonToolbar,
  ButtonGroup,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  getPaginateThreads,
  removeThread,
} from '../../store/actions/forum_actions';
import { useEffect } from 'react';
import PaginationComponent from '../thread/paginate';

const AdminForum = (props) => {
  // const [arts, setArts] = useState(true);

  // const setArticles = () => {
  //   setArts(true);
  // };

  // const setForum = () => {
  //   setArts(false);
  // };
  const dispatch = useDispatch();
  const [removeAlert, setRemoveAlert] = useState(false);
  const [toRemove, setToRemove] = useState(null);
  const threads = useSelector((state) => state.threads);
  let thrds = threads.adminThreads;

  useEffect(() => {
    dispatch(getPaginateThreads());
  }, [dispatch]);

  const goToPrevPage = (page) => {
    dispatch(getPaginateThreads(page));
  };

  const goToNextPage = (page) => {
    dispatch(getPaginateThreads(page));
  };

  const handleClose = () => {
    setRemoveAlert(false);
  };

  const handleShow = (id = null) => {
    setToRemove(id);
    setRemoveAlert(true);
  };

  const handleDelete = () => {
    dispatch(removeThread(toRemove));
  };

  // const editArtsAction = (id) => {
  //   props.history.push(`/admin/edit/${id}`);
  // };

  return (
    <div className='adminlayout'>
      <div className='row'>
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

        <div className='col-10'>
          <ButtonToolbar className='mb-3'>
            <form onSubmit={() => alert('search')}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id='btnGroupAddon2'>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type='text' placeholder='example' />
              </InputGroup>
            </form>
          </ButtonToolbar>

          <PaginationComponent
            threads={thrds}
            prev={(page) => goToPrevPage(page)}
            next={(page) => goToNextPage(page)}
            handleShow={(id) => handleShow(id)}
            // editArtsAction={(id) => editArtsAction(id)}
          />
          <Modal show={removeAlert} onHide={() => setRemoveAlert(false)}>
            <Modal.Header>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>This will permanently delete the article</Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Go Back
              </Button>
              <Button variant='danger' onClick={() => handleDelete()}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AdminForum;
