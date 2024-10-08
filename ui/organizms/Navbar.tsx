import React from "react";
import { styled } from "styled-components";

import { useHistory } from "../History";
import Flex from "../atoms/Flex";
import Grid from "../atoms/Grid";
import BackButton from "../molecules/BackButton";
import Logo from "../molecules/Logo";

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
