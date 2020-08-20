import React, { Fragment } from 'react';
import { FieldArray } from 'formik';
import Input from '../Input';

interface Props {
  name: string;
  objectKey: string;
}

const ArrayInputObject: React.FC<Props> = ({ name, objectKey }) => {
  return (
    <FieldArray name={name}>
      {({ push, remove, form }) => {
        return (
          <Fragment>
            <div>
              {form.values[name] &&
                form.values[name].map((item, idx) => (
                  <div style={{ display: 'flex' }} key={idx}>
                    <Input name={`${name}.${idx}.${objectKey}`} />
                    <button type="button" onClick={() => remove(idx)}>
                      -
                    </button>
                  </div>
                ))}
            </div>
            <button type="button" onClick={() => push({ [objectKey]: '' })}>
              +
            </button>
          </Fragment>
        );
      }}
    </FieldArray>
  );
};

export default ArrayInputObject;
