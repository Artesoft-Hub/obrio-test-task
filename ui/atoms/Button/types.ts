import { FC, ComponentProps, ReactNode } from "react";

export enum ButtonVariant {
    flat = "flat",
    icon = "icon",
}

export type ThemeProps = {
    color?: "primary" | "secondary" | "inherit" | "error";
    size?: "small" | "medium" | "big" | "inherit";
    width?: "fullWidth" | "content";
    variant?: ButtonVariant;
};

export type ButtonProps = {
    children: ReactNode;
    onClick?: (...args: unknown[]) => void;
    type?: "button" | "submit";
    disabled?: boolean;
};

export type ThemedButton = FC<ComponentProps<"button"> & ThemeProps>;
