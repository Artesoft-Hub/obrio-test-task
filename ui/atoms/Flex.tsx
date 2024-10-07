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
    justifyContent?: CSSProperties["justifyContent"];
    direction?: CSSProperties["flexDirection"];
    alignitems?: CSSProperties["alignItems"];
    testId?: string;
};

const FlexContainer = styled.div<Props>`
    display: flex;
    gap: ${({ gap }) => gap ?? Gap.None}px;
    flex-direction: ${({ direction }) => direction ?? "unset"};
    justify-content: ${({ justifyContent }) => justifyContent ?? "unset"};
    align-items: ${({ alignitems }) => alignitems ?? "unset"};
`;

const Flex = ({ children, testId, ...flexProps }: PropsWithChildren<Props>) => {
    return (
        <FlexContainer {...flexProps} data-testid={testId}>
            {children}
        </FlexContainer>
    );
};

export default Flex;
