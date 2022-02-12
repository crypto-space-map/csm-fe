import styled from '@emotion/styled';
import { link } from 'global/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  ${link()}
`;

export const InvestorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InvestorWrapper = styled.div`
  margin-right: 5px;
  display: flex;
`;

export const AnnLink = styled.a`
  display: flex;
  text-decoration: none;
  ${link()}

  & > span {
    margin-left: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > svg {
    color: #000;
    opacity: 0.54;
    width: -webkit-fill-available;
  }
`;
