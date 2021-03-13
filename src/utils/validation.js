import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email Required'),
  password: Yup.string().required('Password Required'),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
});
