import { styled } from "styled-components";

import { ButtonVariant, ThemeProps } from "./types";

export const OutlineButton = styled.button<ThemeProps>`
  padding: ${(props) => props.theme.paddings[props.size || "medium"]};
  font-size: ${(props) => props.theme.buttonFontSizes[props.size || "medium"]};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) =>
    props.theme.colors[props.variant || ButtonVariant.outline][
      props.color || "primary"
    ].text};
  border: 1px solid currentColor;
  background: transparent;
  width: ${(props) => props.theme.width[props.width || "content"]};
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: color-mix(in srgb, currentColor 50%, transparent);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.38);
    border-color: rgba(255, 255, 255, 0.12);
    pointer-events: none;
  }
`;
