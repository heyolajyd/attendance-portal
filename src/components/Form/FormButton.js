import React from 'react';
import { useFormikContext } from 'formik';
import { StyledButton } from './Form.styled';

const FormButton = ({ type, loadingText, buttonText }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <StyledButton onClick={handleSubmit} disabled={isSubmitting} type={type}>
      {isSubmitting ? loadingText : buttonText}
    </StyledButton>
  );
};

export default FormButton;
