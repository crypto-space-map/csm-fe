import styled from '@emotion/styled';

export const StyledLink = styled.a`
  display: flex;

  text-decoration: none;
  width: -webkit-fill-available;
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
