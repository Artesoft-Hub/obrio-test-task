import { styled } from "styled-components";
import { ButtonVariant, ThemeProps } from "./types";

export const IconButton = styled.button<ThemeProps>`
    padding: ${(props) => props.theme.paddings[props.size || "medium"]};
    font-size: ${(props) => props.theme.fontSizes[props.size || "medium"]};
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) =>
        props.theme.colors[props.variant || ButtonVariant.icon][
            props.color || "primary"
        ].text};
    width: ${(props) => props.theme.width[props.width || "content"]};
    border: none;
    font-weight: 500;
    cursor: pointer;
    background: none;
    transition: opacity 0.3s ease-in-out;

    &:disabled {
        opacity: 50%;
        pointer-events: none;
    }
`;
