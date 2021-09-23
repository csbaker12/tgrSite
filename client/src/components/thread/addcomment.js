import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/addarticle.css';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validation, formValues } from './commentValidationSchema';
import { TextField, Button, Divider, FormHelperText } from '@material-ui/core';
import { addComment } from '../../store/actions/forum_actions';
import WYSIWYG from '../utils/forms/wysiwyg';

const AddComment = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notifications = useSelector((state) => state.notifications);
  const [editorBlur, setEditorBlur] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      const newComment = { comment: { ...values } };
      dispatch(addComment(newComment, id));
      console.log(newComment);
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
      history.push(`/forums`);
    }
  });

  return (
    <div className='addarticlewrapper'>
      <form onSubmit={formik.handleSubmit}>
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

        <Divider className='mt-3 mb-3' />
        <Button variant='contained' color='primary' type='submit'>
          Post Comment
        </Button>
      </form>
    </div>
  );
};

export default AddComment;
