import * as Yup from 'yup';

export const formValues = {
  title: '',
  content: '',
  author: '',
};

export const validation = () =>
  Yup.object({
    title: Yup.string().required('Article Title Required'),
    content: Yup.string()
      .required('Article Content Required')
      .min(50, 'Please write a longer Article'),
    author: Yup.string().required('Author is Required'),
  });
