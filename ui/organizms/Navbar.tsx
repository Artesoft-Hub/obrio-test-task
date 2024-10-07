import React from "react";
import Logo from "../molecules/Logo";
import { useHistory } from "../History";
import Grid from "../atoms/Grid";
import BackButton from "../molecules/BackButton";
import Flex from "../atoms/Flex";
import { styled } from "styled-components";

const Container = styled.div`
    height: 68px;
    display: flex;
`;

const Navbar = () => {
    const historyManager = useHistory()!;
    const canGoBack = historyManager.canGoBack();

    return (
        <Container>
            <Grid columns={3} alignitems="center">
                <div>{canGoBack && <BackButton />}</div>
                <Flex justifyContent="center">
                    <Logo />
                </Flex>
            </Grid>
        </Container>
    );
};

export default Navbar;
