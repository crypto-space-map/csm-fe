import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';

export const LoginPageLink = styled.a<{ fontSize?: number }>`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: ${COLOR_PALLETTE.MAIN_BLUE};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : 'inherit')};
  ${link(COLOR_PALLETTE.MAIN_BLUE)}
`;
