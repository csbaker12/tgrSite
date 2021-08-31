import '../../styles/auth.css';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/users_actions';

const Auth = (props) => {
  const [register, setRegister] = useState(true);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '', username: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('This is not a valid email'),
      password: Yup.string().required('Password is required'),
      username: Yup.string().required('Username is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (register) {
      dispatch(registerUser(values));
    }
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
      props.history.push('/');
    }
  }, [notifications, props.history]);

  return (
    <>
      <div className='authstruct'>
        <h1 className='mt-3 mb-3'> {register ? 'Register' : 'Login'}</h1>
        <form onSubmit={formik.handleSubmit}>
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
          <br />
          {register ? (
            <>
              <div>
                <TextField
                  style={{ width: '100%' }}
                  name='username'
                  label='Enter your username'
                  variant='outlined'
                  {...formik.getFieldProps('username')}
                  {...errorHelper(formik, 'username')}
                />
              </div>
              <br />
            </>
          ) : null}
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
          <br />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            size='large'>
            {register ? 'Register' : 'Login'}
          </Button>{' '}
          <Button
            variant='outlined'
            color='secondary'
            size='large'
            onClick={() => setRegister(!register)}>
            Want to {!register ? 'Register' : 'Login'}?
          </Button>
        </form>
      </div>
    </>
  );
};

export default Auth;
