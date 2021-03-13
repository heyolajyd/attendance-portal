import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import FormCard from 'components/FormCard/FormCard';
import FormButton from 'components/Form/FormButton';
import Formik from 'components/Form/Formik';
import FormInput from 'components/Form/FormInput';

import { ButtonContainer } from './Login.styled';

import { loginSchema } from 'utils/validation';

const LoginForm = ({ handleLogin, error }) => {
  return (
    <Formik
      onSubmit={handleLogin}
      validationSchema={loginSchema}
      initialValues={{ email: '', password: '' }}
      error={error}
    >
      <FormCard title="Login" error={error}>
        <FormInput
          name="email"
          label="Email"
          placeholder="Enter email"
          prefix={<UserOutlined />}
        />
        <FormInput
          type="Password"
          name="password"
          label="Password"
          placeholder="Enter password"
          prefix={<LockOutlined />}
        />
        <ButtonContainer>
          <FormButton type="primary" buttonText="Login" />
        </ButtonContainer>
      </FormCard>
    </Formik>
  );
};

export default LoginForm;
