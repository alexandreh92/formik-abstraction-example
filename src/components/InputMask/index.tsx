import React from 'react';
import { Field } from 'formik';
import InputMask from 'react-input-mask';

interface Props {
  name: string;
  mask?: string;
}

const MaskedInput = ({ field, form, mask }) => {
  return (
    <InputMask
      mask={mask}
      value={field.value}
      name={field.name}
      onChange={e => form.setFieldValue(field.name, e.target.value)}
    />
  );
};

const Input: React.FC<Props> = ({ name, mask }) => {
  return <Field name={name} component={MaskedInput} mask={mask} />;
};

export default Input;
