import styled from '@emotion/styled';

export const StyledLink = styled.a`
  display: flex;

  text-decoration: none;

  &:link {
    color: #41aacc;
  }
  &:visited {
    color: #41aacc;
  }
  &:hover {
    color: #41aacc;
  }
  &:active {
    color: #41aacc;
  }
`;

export const AnnLink = styled(StyledLink)`
  & > span {
    margin-left: 5px;
  }

  & > svg {
    color: #000;
    opacity: 0.54;
  }
`;

export const InvestorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InvestorLinkWrapper = styled.div`
  margin-right: 5px;
  display: flex;
`;
