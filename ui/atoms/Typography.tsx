import { styled } from "styled-components";

const Typography = styled.span`
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
`;

export default Typography;
