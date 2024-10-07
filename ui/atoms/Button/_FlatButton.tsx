import { styled } from "styled-components";
import { ButtonVariant, ThemeProps } from "./types";

export const FlatButton = styled.button<ThemeProps>`
    padding: ${(props) => props.theme.paddings[props.size || "medium"]};
    font-size: ${(props) =>
        props.theme.buttonFontSizes[props.size || "medium"]};
    background-color: ${(props) =>
        props.theme.colors[props.variant || ButtonVariant.flat][
            props.color || "primary"
        ].background};
    color: ${(props) =>
        props.theme.colors[props.variant || ButtonVariant.flat][
            props.color || "primary"
        ].text};
    width: ${(props) => props.theme.width[props.width || "content"]};
    border: none;
    font-weight: 500;
    border-radius: 24px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-family: ${(props) => props.theme.fontFamily};

    &:hover {
        background-color: ${(props) =>
            props.theme.colors[props.variant || ButtonVariant.flat][
                props.color || "primary"
            ].hover};
    }

    &:disabled {
        color: rgba(255, 255, 255, 0.38);
        background-color: rgba(255, 255, 255, 0.12);
        pointer-events: none;
    }
`;
