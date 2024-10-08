import React from "react";
import { styled } from "styled-components";

import DoneIcon from "../atoms/DoneIcon";
import Flex from "../atoms/Flex";
import { Space } from "../atoms/Space";
import Typography from "../atoms/Typography";

type Props = {
  title: string;
  onClick: () => void;
  isSelected?: boolean;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  width: 100%;
  background: white;
  box-sizing: border-box;
  min-height: 48px;
`;

const SelectionContainer = styled(Flex)`
  width: 24px;
  height: 24px;
`;

const OptionTab = ({ title, isSelected, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <SelectionContainer alignitems="center">
        {isSelected && <DoneIcon />}
      </SelectionContainer>
      <Space mr="auto" ml="auto">
        <Typography align="center">{title}</Typography>
      </Space>
    </Container>
  );
};

export default OptionTab;
