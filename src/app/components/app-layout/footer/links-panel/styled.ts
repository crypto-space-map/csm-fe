import styled from '@emotion/styled';
import { Link as RRDLink } from '@mui/material';

export const StyledLinksPanel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  justify-content: start;
`;

export const Link = styled(RRDLink)`
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-decoration: none;
`;
