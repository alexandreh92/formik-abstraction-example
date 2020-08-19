import React, { Fragment, useState } from 'react';

import Form from '~/components/Form';
import Input from '~/components/Input';
// import { Container } from './styles';

interface Values {
  firstName: string;
}

const initialValues = {
  firstName: '',
};

const SimpleInputExample: React.FC = () => {
  const [submitedValues, setSubmitedValues] = useState({});

  return (
    <Fragment>
      <Form<Values>
        initialValues={initialValues}
        onSubmit={values => {
          setSubmitedValues(values);
        }}
      >
        <h4>Simple Input</h4>
        <Input name="firstName" />
        <br />
        <button type="submit">submit</button>
      </Form>
      <br />
      <div>
        <div>initialValues: {JSON.stringify(initialValues, null, 2)}</div>
        <br />
        <div>submitedValues: {JSON.stringify(submitedValues, null, 2)}</div>
      </div>
    </Fragment>
  );
};

export default SimpleInputExample;
