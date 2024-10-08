import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

type MarginProps = {
  mt?: number | "auto";
  mr?: number | "auto";
  mb?: number;
  ml?: number | "auto";
};

type PaddingProps = {
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};

type SpaceProps = MarginProps & PaddingProps;

const getValidMargin = (value: number | "auto" | undefined) => {
  if (!value) {
    return "unset";
  }

  return typeof value === "number" ? `${value}px` : "auto";
};

const Container = styled.div<SpaceProps>`
  margin-top: ${(props) => getValidMargin(props.mt)};
  margin-right: ${(props) => getValidMargin(props.mr)};
  margin-left: ${(props) => getValidMargin(props.ml)};
  margin-bottom: ${(props) => props.mb}px;
  padding-top: ${(props) => props.pt}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
`;

export const Space = ({
  children,
  ...props
}: PropsWithChildren<SpaceProps>) => (
  <Container {...props}>{children}</Container>
);
