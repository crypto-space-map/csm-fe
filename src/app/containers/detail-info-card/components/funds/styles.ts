import styled from '@emotion/styled';
import { link } from 'global/styles';

export const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  ${link()}
`;

export const InvestorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InvestorLinkWrapper = styled.div`
  margin-right: 5px;
  display: flex;
`;
