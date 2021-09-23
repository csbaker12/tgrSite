import * as Yup from 'yup';

export const formValues = {
  email: '',
  firstname: '',
  lastname: '',
  username: '',
  location: '',
};

export const validation = () =>
  Yup.object({
    email: Yup.string().required('Valid Email Required'),
    firsntame: Yup.string(),
    lastname: Yup.string(),
    username: Yup.string().required('Valid Username Required'),
    location: Yup.string(),
  });
