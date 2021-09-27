import '../../styles/search.css';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { getSearchResults } from '../../store/actions/article_actions';

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { keywords: '' },
    validationSchema: Yup.object({
      keywords: Yup.string()
        .required('This is required')
        .min(3, 'Please provide a longer keyword'),
    }),
    onSubmit: (values) => {
      dispatch(getSearchResults(1, 5, values.keywords));
      props.history.push(`/searchresults?keywords=${values.keywords}`);
    },
  });

  const errorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values] ? true : false,
    helperText:
      formik.errors[values] && formik.touched[values]
        ? formik.errors[values]
        : null,
  });
  return (
    <div className='searchform'>
      <form onSubmit={formik.handleSubmit}>
        <div className='searchformtextfield'>
          <TextField
            label='Search Teton Gravity'
            variant='outlined'
            name='keywords'
            {...formik.getFieldProps('keywords')}
            {...errorHelper(formik, 'keywords')}
          />
        </div>
      </form>
    </div>
  );
};

export default withRouter(SearchForm);
