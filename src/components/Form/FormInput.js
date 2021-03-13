import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { useFormikContext } from 'formik';
import { StyledFormInput } from './Form.styled';

const ErrorFeedback = ({ error }) => {
  return <div>{error}</div>;
};

const FormInput = ({ label, type, size, placeholder, name, prefix }) => {
  const {
    handleChange,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();

  const InputComponent = type ? Input[type] : Input;

  const hasError = touched[name] && errors[name];

  return (
    <StyledFormInput>
      <label>{label}</label>
      <InputComponent
        name={name}
        placeholder={placeholder}
        size={size}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        prefix={prefix}
      />
      {hasError && <ErrorFeedback error={errors[name]} />}
    </StyledFormInput>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  prefix: PropTypes.node,
};

export default FormInput;
