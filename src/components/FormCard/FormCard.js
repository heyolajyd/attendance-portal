import React from 'react';
import { Alert } from 'antd';
import { FormContainer, Title } from './FormCard.styled';

const FormCard = ({ title, error, children }) => {
  return (
    <FormContainer>
      <Title>{title}</Title>
      {error && <Alert message={error} type="error" showIcon closable />}
      {children}
    </FormContainer>
  );
};

export default FormCard;
