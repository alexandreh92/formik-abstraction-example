import React from 'react';
import { FieldArray } from 'formik';
import Input from '../Input';

interface Props {
  name: string;
  objectKey: string;
}

const ArrayInputObject: React.FC<Props> = ({ name, objectKey }) => {
  return (
    <FieldArray name={name}>
      {({ move, swap, push, insert, unshift, pop, form }) => {
        return (
          <div>
            {form.values[name] &&
              form.values[name].map((item, idx) => (
                <Input key={idx} name={`${name}.${idx}.${objectKey}`} />
              ))}
          </div>
        );
      }}
    </FieldArray>
  );
};

export default ArrayInputObject;
