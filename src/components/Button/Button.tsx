import React, { forwardRef } from "react";
import { Styled } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement & HTMLAnchorElement>
  ) => void;
  children?: React.ReactNode;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ children, ...rest }, ref) => (
  <Styled.Button
    ref={ref as never} // Fixes the interface of the forwardRef
    {...rest}
  >
    {children}
  </Styled.Button>
));
