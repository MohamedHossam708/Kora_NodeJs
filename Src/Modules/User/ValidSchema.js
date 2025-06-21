import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),

  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),

  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['male', 'female'], 'Gender must be either "male" or "female"'),

  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^(\+20|0)?1[0125][0-9]{8}$/,
      'Phone number must be a valid Egyptian mobile number'
    ),

  address: yup
    .string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters'),

  city: yup
    .string()
    .required('City is required'),

  state: yup
    .string()
    .required('State is required'),

  country: yup
    .string()
    .required('Country is required'),

  role: yup
    .string()
    .oneOf(['user', 'admin'], 'Role must be either "user" or "admin"')
    .default('user'),
});
