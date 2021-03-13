import React from 'react';
import { Formik } from 'formik';

const FormikWrappper = ({
  initialValues,
  children,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default FormikWrappper;
