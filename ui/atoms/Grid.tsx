import React, { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";

export enum Gap {
    None = 0,
    Smallest = 2,
    Small = 4,
    Medium = 8,
    SemiBig = 16,
    Big = 20,
    Bigger = 24,
}

type Props = {
    gap?: Gap;
    columns?: number;
    justifyContent?: CSSProperties["justifyContent"];
    alignContent?: CSSProperties["alignContent"];
    justifyItems?: CSSProperties["justifyItems"];
    alignitems?: CSSProperties["alignItems"];
    testId?: string;
};

const GridContainer = styled.div<Props>`
    display: grid;
    gap: ${({ gap }) => gap ?? Gap.None}px;
    grid-template-columns: ${({ columns }) =>
        columns ? `repeat(${columns}, 1fr)` : "auto"};
    justify-content: ${({ justifyContent }) => justifyContent ?? "unset"};
    align-content: ${({ alignContent }) => alignContent ?? "unset"};
    justify-items: ${({ justifyItems }) => justifyItems ?? "unset"};
    align-items: ${({ alignitems }) => alignitems ?? "unset"};
`;

const Grid = ({ children, testId, ...gridProps }: PropsWithChildren<Props>) => {
    return (
        <GridContainer {...gridProps} data-testid={testId}>
            {children}
        </GridContainer>
    );
};

export default Grid;
