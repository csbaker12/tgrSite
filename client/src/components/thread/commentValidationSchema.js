import * as Yup from 'yup';

export const formValues = {
  content: '',
  author: '',
};

export const validation = () =>
  Yup.object({
    content: Yup.string()
      .required('Article Content Required')
      .min(1, 'Please write a longer Comment'),
    author: Yup.string().required('Author is Required'),
  });
