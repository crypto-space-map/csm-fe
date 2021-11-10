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

export const InvestorsLinkWrapper = styled.div`
  margin-right: 5px;
  display: flex;
`;

export const PartnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 14px;
  & > span {
    margin-left: 4px;
  }
`;
