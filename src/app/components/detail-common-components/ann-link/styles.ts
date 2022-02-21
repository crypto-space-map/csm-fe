import styled from '@emotion/styled';
import { link } from 'global/styles';

export const StyledAnnLink = styled.a`
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
  }
`;
