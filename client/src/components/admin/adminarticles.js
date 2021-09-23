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
  getPaginateArticles,
  removeArticle,
} from '../../store/actions/article_actions';
import { useEffect } from 'react';
import PaginationComponent from '../article/paginate';

const AdminArticles = (props) => {
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
  const articles = useSelector((state) => state.articles);
  let arts = articles.adminArticles;

  useEffect(() => {
    dispatch(getPaginateArticles());
  }, [dispatch]);

  const goToPrevPage = (page) => {
    dispatch(getPaginateArticles(page));
  };

  const goToNextPage = (page) => {
    dispatch(getPaginateArticles(page));
  };

  const handleClose = () => {
    setRemoveAlert(false);
  };

  const handleShow = (id = null) => {
    setToRemove(id);
    setRemoveAlert(true);
  };

  const handleDelete = () => {
    dispatch(removeArticle(toRemove));
  };

  const editArtsAction = (id) => {
    props.history.push(`/admin/edit/${id}`);
  };

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
            <ButtonGroup className='mr-4'>
              <LinkContainer to='/admin/add'>
                <Button variant='secondary'>Add Article</Button>
              </LinkContainer>
            </ButtonGroup>
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
            arts={arts}
            prev={(page) => goToPrevPage(page)}
            next={(page) => goToNextPage(page)}
            handleShow={(id) => handleShow(id)}
            editArtsAction={(id) => editArtsAction(id)}
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

export default AdminArticles;
