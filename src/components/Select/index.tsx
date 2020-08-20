/* eslint-disable import/no-duplicates */
import React from 'react';
import { Field, FieldProps } from 'formik';
import Select, { OptionTypeBase, CommonProps } from 'react-select';
// import Option from '../../../node_modules/@types/react-select';

interface Option {
  value: any;
  label: string;
}

interface Props {
  name: string;
  options: Option[];
  isMulti?: boolean;
}

interface SelectProps extends CommonProps<OptionTypeBase> {
  name: string;
}

const SelectInput: React.FC<SelectProps & FieldProps> = ({
  options,
  field,
  form,
  isMulti,
}) => {
  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    }
    return isMulti ? [] : ('' as any);
  };

  return (
    <Select
      options={options}
      isMulti={isMulti}
      name={field.name}
      value={getValue()}
      onChange={(option: OptionTypeBase) => {
        form.setFieldValue(
          field.name,
          isMulti
            ? (option as Option[]).map((item: Option) => item.value)
            : (option as Option).value,
        );
      }}
      onBlur={field.onBlur}
    />
  );
};

const Input: React.FC<Props> = ({ name, options, isMulti }) => {
  return (
    <Field
      name={name}
      component={SelectInput}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default Input;
