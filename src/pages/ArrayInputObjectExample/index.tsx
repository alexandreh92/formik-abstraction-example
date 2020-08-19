import React, { Fragment, useState } from 'react';
// import { Field } from 'formik';
import * as Yup from 'yup';

import Form from '~/components/Form';
import Input from '~/components/Input';
import ArrayInputObject from '~/components/ArrayInputObject';

interface Teste {
  id: number;
  name: string;
}

interface Foo {
  id: number;
  bar: string;
}

interface Values {
  name: string;
  testes: Teste[];
  foo: Foo[];
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  testes: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .min(4, 'too short')
        .required('Required'),
    }),
  ),
});

const initialValues = {
  name: '',
  testes: [
    { id: 1, name: '' },
    { id: 2, name: '' },
  ],
  foo: [
    { id: 1, bar: '' },
    { id: 2, bar: '' },
  ],
};

const ArrayInputExample: React.FC = () => {
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
        <h4>Array Input With Object</h4>
        <Input name="name" />
        <br />
        Array de testes
        <ArrayInputObject name="testes" objectKey="name" />
        <br />
        Array de foo
        <ArrayInputObject name="foo" objectKey="bar" />
        <br />
        <button type="submit">submit</button>
      </Form>
      <br />
      <div>
        <div>initialValues: {JSON.stringify(initialValues, null, 4)}</div>
        <br />
        <div>submitedValues: {JSON.stringify(submitedValues, null, 4)}</div>
      </div>
    </Fragment>
  );
};

export default ArrayInputExample;
