import { CSSProperties, styled } from "styled-components";

type Props = {
  align?: CSSProperties["textAlign"];
};

const Typography = styled.span<Props>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: ${(props) => props.align};
`;

export default Typography;
