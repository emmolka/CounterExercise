import React from "react";
import { StyledInput, StyledWrapper } from "./style";
interface InputProps {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }: InputProps) => {
  return (
    <StyledWrapper>
      <StyledInput value={value} onChange={onChange} />
    </StyledWrapper>
  );
};

export default Input;
