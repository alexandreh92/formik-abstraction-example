import React from 'react';
import { Field } from 'formik';

interface Props {
  name: string;
}

const Input: React.FC<Props> = ({ name }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div>
          <input type="text" {...field} placeholder="Teste" />
          {meta.touched && meta.error && (
            <div style={{ color: 'red' }}>{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default Input;
