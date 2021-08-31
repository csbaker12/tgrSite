import '../../styles/join.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../store/actions/users_actions';

const SignInCard = (props) => {
  const history = useHistory();
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '', username: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('This is not a valid email'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    dispatch(signInUser(values));
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
      history.push('/');
    }
  }, [notifications, history]);

  return (
    <>
      <h1 className='signinheader'>Sign In:</h1>
      <br />
      <form className='signinform' onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            style={{ width: '100%' }}
            name='email'
            label='Enter your email'
            variant='outlined'
            {...formik.getFieldProps('email')}
            {...errorHelper(formik, 'email')}
          />
        </div>
        <div>
          <TextField
            style={{ width: '100%' }}
            name='password'
            type='password'
            label='Enter your password'
            variant='outlined'
            {...formik.getFieldProps('password')}
            {...errorHelper(formik, 'password')}
          />
        </div>
        <Button variant='contained' color='primary' type='submit' size='large'>
          Sign In
        </Button>{' '}
        {/* <input
          type='text'
          placeholder='Enter your email'
          name='email'
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'black',
            fontSize: '40%',
            display: 'block',
            marginBottom: '3%',
            marginTop: '5%',
          }}
        />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'black',
            fontSize: '40%',
            display: 'block',
          }}
        />

        <button className='signinformsubmit'>Submit</button> */}
      </form>
    </>
  );
};

export default SignInCard;
