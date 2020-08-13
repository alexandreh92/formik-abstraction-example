import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import axios from 'axios';

import Form from '~/components/Form';

interface Values {
  name: string;
  street: boolean;
  // THIS SHOULD MATCH API DATA RESPONSE
}

const initial = {
  name: 'asdasd',
  street: true,
};

const AsyncInitialValues: React.FC = () => {
  const [apiValues, setApiValues] = useState(initial);

  useEffect(() => {
    async function fetchAPI() {
      const res = await axios.get('https://api.github.com/users/alexandreh92');
      setApiValues(res.data);
    }
    fetchAPI();
  }, []);

  return (
    <Form<Values>
      initialValues={apiValues}
      onSubmit={values => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <h4>Simple Input</h4>
      <Field name="name" />
      <br />
      <button type="submit">submit</button>
    </Form>
  );
};

export default AsyncInitialValues;
