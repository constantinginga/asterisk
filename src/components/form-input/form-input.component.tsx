import { FC, InputHTMLAttributes } from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* if the user typed in the input anything, shrink label */}
      <Input {...otherProps} />
      {/* if label exists, render the label */}
      {label && (
        <FormInputLabel
          htmlFor={otherProps.id}
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
