import { useState, useEffect } from 'react';
import '../../styles/addarticle.css';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validation, formValues } from './validationSchema';
import {
  TextField,
  Button,
  Divider,
  FormHelperText,
  Select,
  FormControl,
  MenuItem,
} from '@material-ui/core';
import WYSIWYG from '../utils/forms/wysiwyg';
import {
  getAdminArticle,
  updateArticle,
} from '../../store/actions/article_actions';
import { clearArticle } from '../../store/actions/index';

const EditArticle = (props) => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);
  const articles = useSelector((state) => state.articles);
  const [formData, setFormData] = useState(formValues);
  const [editorBlur, setEditorBlur] = useState(false);
  const [editContent, setEditContent] = useState(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      dispatch(updateArticle(values, props.match.params.id));
      dispatch(clearArticle());
    },
  });

  const handleEditorState = (state) => {
    formik.setFieldValue('content', state, true);
  };

  const handleEditorBlur = (blur) => {
    setEditorBlur(true);
  };

  const errorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values] ? true : false,
    helperText:
      formik.errors[values] && formik.touched[values]
        ? formik.errors[values]
        : null,
  });

  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push('/admin/articles');
    }
  });

  useEffect(() => {
    dispatch(getAdminArticle(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (articles && articles.current) {
      setFormData(articles.current);
      setEditContent(articles.current.content);
    }
  }, [articles]);

  return (
    <div className='addarticlewrapper'>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            style={{ width: '100%' }}
            name='title'
            label='Enter a title'
            variant='outlined'
            {...formik.getFieldProps('title')}
            {...errorHelper(formik, 'title')}
          />
        </div>

        <div className='mt-3'>
          <WYSIWYG
            setEditorState={(state) => handleEditorState(state)}
            setEditorBlur={(blur) => handleEditorBlur(blur)}
            editContent={editContent}
          />

          {formik.errors.content && editorBlur ? (
            <FormHelperText error={true}>
              {formik.errors.content}
            </FormHelperText>
          ) : null}

          <TextField
            name='content'
            type='hidden'
            {...formik.getFieldProps('content')}
            {...errorHelper(formik, 'content')}
          />
        </div>

        <div className='mt-3'>
          <TextField
            style={{ width: '100%' }}
            name='author'
            label='Enter an author'
            variant='outlined'
            {...formik.getFieldProps('author')}
            {...errorHelper(formik, 'author')}
          />
        </div>

        <br />
        <FormControl>
          <h5>Select a Category</h5>
          <Select
            name='category'
            {...formik.getFieldProps('category')}
            error={
              formik.errors.cateogry && formik.touched.category ? true : false
            }>
            <MenuItem value='ski'>Ski</MenuItem>
            <MenuItem value='board'>Snowboard</MenuItem>
            <MenuItem value='bike'>Bike</MenuItem>
            <MenuItem value='surf'>Surf</MenuItem>
            <MenuItem value='adventure'>Adventure</MenuItem>
            <MenuItem value='gear'>Gear Buy/Sell</MenuItem>
            <MenuItem value='culture'>Culture</MenuItem>
            <MenuItem value='news'>News</MenuItem>
            <MenuItem value='more'>More Sports</MenuItem>
            <MenuItem value='films'>Films</MenuItem>
          </Select>
        </FormControl>
        <br />

        <Divider className='mt-3 mb-3' />
        <Button variant='contained' color='primary' type='submit'>
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default EditArticle;
