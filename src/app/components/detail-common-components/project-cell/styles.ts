import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { link } from 'global/styles';
import { Link } from 'react-router-dom';

export const text = () => css`
  font-weight: normal;
  font-size: 16px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledText = styled.span`
  ${text}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  ${link()}
  ${text}
`;

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  & > img {
    margin-right: 4px;
  }
`;
