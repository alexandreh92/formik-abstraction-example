import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import * as Yup from 'yup';

import Form from '~/components/Form';
import Input from '~/components/Input';

interface Values {
  name: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initial = {
  name: '',
};

const AsyncInitialValuesExample: React.FC = () => {
  const [apiValues, setApiValues] = useState(initial);
  const [submitedValues, setSubmitedValues] = useState({});

  useEffect(() => {
    async function fetchAPI() {
      setTimeout(async () => {
        const res = await axios.get(
          'https://api.github.com/users/alexandreh92',
        );
        setApiValues(oldState => ({ ...oldState, name: res.data.name }));
      }, 1000);
    }
    fetchAPI();
  }, []);

  return (
    <Fragment>
      <Form<Values>
        initialValues={apiValues}
        validationSchema={SignupSchema}
        onSubmit={values => {
          setSubmitedValues(values);
        }}
      >
        <h4>Async Request To Change Initial Values</h4>
        <Input name="name" />
        <br />
        <button type="submit">submit</button>
      </Form>
      <br />
      <div>
        <div>initialValues: {JSON.stringify(apiValues, null, 2)}</div>
        <br />
        <div>submitedValues: {JSON.stringify(submitedValues, null, 2)}</div>
      </div>
    </Fragment>
  );
};

export default AsyncInitialValuesExample;
