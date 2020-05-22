import React from "react";
import { StyledButton } from "./style";

interface PlusButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
}

const Button: React.FC<PlusButtonProps> = ({
  text,
  onClick
}: PlusButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
