import React from "react";
import Logo from "../molecules/Logo";
import { useHistory } from "../History";
import Grid from "../atoms/Grid";
import BackButton from "../molecules/BackButton";
import Flex from "../atoms/Flex";

const Navbar = () => {
    const historyManager = useHistory()!;
    const canGoBack = historyManager.canGoBack();

    return (
        <Grid columns={3} alignitems="center">
            <div>{canGoBack && <BackButton />}</div>
            <Flex justifyContent="center">
                <Logo />
            </Flex>
        </Grid>
    );
};

export default Navbar;
