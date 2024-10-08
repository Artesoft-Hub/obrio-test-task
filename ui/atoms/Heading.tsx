import styled from "styled-components";

type Props = {
  h: 1 | 2 | 3 | 4 | 5;
};

const Heading = styled.h1.attrs<Props>(({ h }) => ({
  as: `h${h}`,
}))<Props>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ h, theme }) => {
    switch (h) {
      case 1:
        return theme.fontSizes.large;
      case 2:
        return theme.fontSizes.bigger;
      case 3:
        return theme.fontSizes.big;
      case 4:
        return theme.fontSizes.medium;
      case 5:
        return theme.fontSizes.small;
      default:
        return theme.fontSizes.medium;
    }
  }};
  font-weight: bold;
`;

export default Heading;
