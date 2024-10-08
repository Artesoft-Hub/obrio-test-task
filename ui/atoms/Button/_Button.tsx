import React from "react";

import { FlatButton } from "./_FlatButton";
import { IconButton } from "./_IconButton";
import { OutlineButton } from "./_OutlineButton";
import { ButtonProps, ButtonVariant, ThemeProps, ThemedButton } from "./types";

type Props = {
  testId?: string;
  className?: string;
};

const buttons = new Map<ButtonVariant, ThemedButton>([
  [ButtonVariant.flat, FlatButton],
  [ButtonVariant.icon, IconButton],
  [ButtonVariant.outline, OutlineButton],
]);

export const Button = ({
  color = "primary",
  size = "medium",
  type = "button",
  width = "content",
  variant = ButtonVariant.flat,
  disabled,
  children,
  onClick,
  testId,
  className,
}: ButtonProps & ThemeProps & Props) => {
  const ButtonComponent = buttons.get(variant)!;

  return (
    <ButtonComponent
      color={color}
      size={size}
      onClick={onClick}
      type={type}
      width={width}
      variant={variant}
      disabled={disabled}
      data-testid={testId}
      className={className}
    >
      {children}
    </ButtonComponent>
  );
};
