import styled from '@emotion/styled';
import { link } from 'global/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  ${link()}
`;

export const InvestorWrapper = styled.div`
  margin-right: 5px;
  display: flex;
`;
