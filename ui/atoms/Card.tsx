import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: white;
    padding: 16px;
    border-radius: 16px;
`;

const Card = ({ children }: PropsWithChildren) => {
    return <Container>{children}</Container>;
};

export default Card;
