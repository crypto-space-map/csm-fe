import styled from '@emotion/styled';
import { Link as MuiLink } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledLinksPanel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2em;
  justify-content: start;
`;

export const Link = styled(MuiLink)`
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  text-decoration: none;
`;
