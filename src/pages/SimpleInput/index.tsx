import React from 'react';
import { Field } from 'formik';

import Form from '~/components/Form';
// import { Container } from './styles';

interface Values {
  firstName: string;
  street: boolean;
}

const initial = {
  firstName: 'asdasd',
  street: true,
};

const SimpleInput: React.FC = () => {
  return (
    <Form<Values>
      initialValues={initial}
      onSubmit={values => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <h4>Simple Input</h4>
      <Field name="firstName" />
      <br />
      <button type="submit">submit</button>
    </Form>
  );
};

export default SimpleInput;
