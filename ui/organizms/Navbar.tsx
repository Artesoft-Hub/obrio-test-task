import React from "react";
import Logo from "../molecules/Logo";
import { useHistory } from "../History";
import Grid from "../atoms/Grid";
import NavigateBack from "../NavigateBack";

const Navbar = () => {
    const historyManager = useHistory()!;
    const canGoBack = historyManager.canGoBack();

    return (
        <Grid columns={3} alignitems="center">
            <div>{canGoBack && <NavigateBack />}</div>
            <Logo />
        </Grid>
    );
};

export default Navbar;
