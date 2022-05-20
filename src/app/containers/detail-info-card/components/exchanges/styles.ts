import styled from '@emotion/styled';
import { link } from 'global/styles';

export const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${link()}
`;

export const ExchangeWrapper = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DecorateHeader = styled.div`
  width: max-content;
`;
