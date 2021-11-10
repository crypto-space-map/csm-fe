import styled from '@emotion/styled';
import { link } from 'global/styles';

export const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  ${link}
`;

export const AnnLink = styled(StyledLink)`
  & > span {
    margin-left: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > svg {
    color: #000;
    opacity: 0.54;
  }
`;

export const ExchangeWrapper = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
