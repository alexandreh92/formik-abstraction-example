import React, { Fragment, useState } from 'react';

import Form from '~/components/Form';
import InputMask from '~/components/InputMask';
// import { Container } from './styles';

interface Values {
  phone: string;
}

const initialValues = {
  phone: '123',
};

const InputMaskExample: React.FC = () => {
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
        <InputMask name="phone" mask="(99) 99999-9999" />
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

export default InputMaskExample;
