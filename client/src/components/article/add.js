import { useState, useEffect, useRef } from 'react';
import '../../styles/addarticle.css';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validation, formValues } from './validationSchema';
import {
  TextField,
  Button,
  Divider,
  FormHelperText,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import { addArticle } from '../../store/actions/article_actions';
import AddIcon from '@material-ui/icons/Add';
import WYSIWYG from '../utils/forms/wysiwyg';

const AddArticle = (props) => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);
  const [editorBlur, setEditorBlur] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      dispatch(addArticle(values));
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
      props.history.push('/stash');
    }
  });

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
              formik.errors.category && formik.touched.category ? true : false
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
          Create Article
        </Button>
      </form>
    </div>
  );
};

export default AddArticle;
