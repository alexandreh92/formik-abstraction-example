import React, { Fragment, useState } from 'react';

import Form from '~/components/Form';
import Select from '~/components/Select';
// import { Container } from './styles';

interface Values {
  firstName: string;
  lastName: string[];
}

const initialValues = {
  firstName: '',
  lastName: [],
};

const SelectExample: React.FC = () => {
  const [submitedValues, setSubmitedValues] = useState({});

  return (
    <Fragment>
      <Form<Values>
        initialValues={initialValues}
        onSubmit={values => {
          setSubmitedValues(values);
        }}
      >
        <h4>Simple Select</h4>
        <Select
          name="firstName"
          options={[
            { value: 1, label: '123' },
            { value: 2, label: '1234' },
          ]}
        />
        <br />
        <h4>Multiple Select</h4>
        <Select
          name="lastName"
          isMulti
          options={[
            { value: 1, label: '123' },
            { value: 2, label: '1234' },
          ]}
        />
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

export default SelectExample;
