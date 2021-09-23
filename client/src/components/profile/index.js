import {
  getUserProfile,
  updateUsername,
  updateEmail,
  updateProfile,
} from '../../store/actions/users_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { validation, formValues } from './validationSchema';
import { TextField, Button, Divider, FormHelperText } from '@material-ui/core';
import '../../styles/profile.css';

const Profile = (props) => {
  const profile = useSelector((state) => state.users.profile);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(formValues);
  // const [email, setEmail] = useState(false);
  // const [username, setUsername] = useState(false);
  const [updateProf, setUpdateProf] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      if (values.email !== profile.email) {
        const email = { email: profile.email, newemail: values.email };
        dispatch(updateEmail(email));
      }
      if (values.username !== profile.username) {
        const username = { newusername: values.username };
        dispatch(updateUsername(username));
      }
      dispatch(updateProfile(values));
      setUpdateProf(false);
    },
  });

  // const editUsername = () => {
  //   setUsername(true);
  // };

  // const editEmail = () => {
  //   setEmail(true);
  // };

  const editProfile = () => {
    setUpdateProf(true);
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const errorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values] ? true : false,
    helperText:
      formik.errors[values] && formik.touched[values]
        ? formik.errors[values]
        : null,
  });
  return (
    <>
      {profile && !updateProf ? (
        <div className='profilewrapper'>
          <>
            <div className='profilecontentwrapper'>
              <h2>Welcome to your Profile!</h2>
              <hr />
              <br />

              <h4>Your username is: {profile.username}</h4>
              <br />

              <h4>Your email is: {profile.email}</h4>
              <br />

              <h4>Your first name is: {profile.firstname}</h4>
              <br />

              <h4>Your last name is: {profile.lastname}</h4>
              <br />

              <h4>Your location is: {profile.location}</h4>
              <br />

              <button onClick={editProfile}>Edit Profile</button>
            </div>
            <br />
          </>
        </div>
      ) : (
        <>
          {updateProf ? (
            <div className='profilewrapper profilecontentwrapper'>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <TextField
                    style={{ width: '100%' }}
                    name='username'
                    label='Enter a username'
                    variant='outlined'
                    {...formik.getFieldProps('username')}
                    {...errorHelper(formik, 'username')}
                  />
                </div>

                <div className='mt-3'>
                  <TextField
                    style={{ width: '100%' }}
                    name='email'
                    label='Enter an email'
                    variant='outlined'
                    {...formik.getFieldProps('email')}
                    {...errorHelper(formik, 'email')}
                  />
                </div>

                <div className='mt-3'>
                  <TextField
                    style={{ width: '100%' }}
                    name='firstname'
                    label='Enter a first name'
                    variant='outlined'
                    {...formik.getFieldProps('firstname')}
                    {...errorHelper(formik, 'firstname')}
                  />
                </div>

                <div className='mt-3'>
                  <TextField
                    style={{ width: '100%' }}
                    name='lastname'
                    label='Enter a last name'
                    variant='outlined'
                    {...formik.getFieldProps('lastname')}
                    {...errorHelper(formik, 'lastname')}
                  />
                </div>

                <div className='mt-3'>
                  <TextField
                    style={{ width: '100%' }}
                    name='location'
                    label='Enter a location'
                    variant='outlined'
                    {...formik.getFieldProps('location')}
                    {...errorHelper(formik, 'location')}
                  />
                </div>

                <Divider className='mt-3 mb-3' />
                <Button variant='contained' color='primary' type='submit'>
                  Save Changes
                </Button>
              </form>
            </div>
          ) : (
            <>Please Log In to Edit Profile </>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
