import React, { Fragment, useState } from 'react';
import * as Yup from 'yup';

import Form from '~/components/Form';
import Input from '~/components/Input';
import ArrayInputString from '~/components/ArrayInputString';

interface Values {
  name: string;
  testes: string[];
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  testes: Yup.array().of(Yup.string().required('Required')),
});

const initialValues = {
  name: '',
  testes: ['', ''],
};

const ArrayInputStringExample: React.FC = () => {
  const [submitedValues, setSubmitedValues] = useState({}); // you probably won't need this

  return (
    <Fragment>
      <Form<Values>
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => {
          setSubmitedValues(values);
        }}
      >
        <h4>Array Input with Strings</h4>
        <Input name="name" />
        <br />
        <ArrayInputString name="testes" />
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

export default ArrayInputStringExample;
