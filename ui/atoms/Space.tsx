import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

type MarginProps = {
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
};

type PaddingProps = {
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
};

type SpaceProps = MarginProps & PaddingProps;

const Container = styled.div<SpaceProps>`
    margin-top: ${(props) => props.mt}px;
    margin-right: ${(props) => props.mr}px;
    margin-bottom: ${(props) => props.mb}px;
    margin-left: ${(props) => props.ml}px;
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
