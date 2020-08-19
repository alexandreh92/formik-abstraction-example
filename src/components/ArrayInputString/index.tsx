import React from 'react';
import { FieldArray } from 'formik';
import Input from '../Input';

interface Props {
  name: string;
}

const ArrayInputObject: React.FC<Props> = ({ name }) => {
  return (
    <FieldArray name={name}>
      {({ move, swap, push, insert, unshift, pop, form }) => {
        return (
          <div>
            {form.values[name] &&
              form.values[name].map((item, idx) => (
                <Input key={idx} name={`${name}.${idx}`} />
              ))}
          </div>
        );
      }}
    </FieldArray>
  );
};

export default ArrayInputObject;
