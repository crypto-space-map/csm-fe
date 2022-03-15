import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { link } from 'global/styles';
import { Link } from 'react-router-dom';

export const text = () => css`
  font-weight: normal;
  font-size: 16px;
  margin-left: 4px;
`;

export const StyledText = styled.span`
  ${text}
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  overflow-wrap: anywhere;
  ${link()}
  ${text}
`;

export const ProjectWrapper = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
