import { useState } from 'react';
import { StyledTextInput } from './Form.styled';

interface TextInputProps {
  placeholder: string;
}

const TextInput = ({ placeholder }: TextInputProps) => {
  const [value, setValue] = useState<string | number>('');

  return (
    <StyledTextInput
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextInput;
