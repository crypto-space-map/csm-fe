import styled from '@emotion/styled';

import { WrappedStyleProps } from '../types/main';

export const BasicWrappedComponent = styled.div<WrappedStyleProps>`
  ${({ wrapStyle = {} }) => ({ ...wrapStyle })}
`;

export const FlexedDiv = styled(BasicWrappedComponent)`
  display: flex;
  ${({ wrapStyle = {} }) => ({ ...wrapStyle })}
`;
