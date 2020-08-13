import React, { RefObject } from 'react';
import { Formik, Form as FormikForm } from 'formik';

interface Props<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  formRef?: RefObject<HTMLFormElement>;
}

const Form: <T>(p: React.PropsWithChildren<Props<T>>) => React.ReactElement = ({
  initialValues,
  onSubmit,
  children,
}) => {
  const handleOnSubmit = (values: any) => {
    onSubmit(values);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};

export default Form;
