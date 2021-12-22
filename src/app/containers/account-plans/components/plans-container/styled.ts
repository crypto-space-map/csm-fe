import styled from '@emotion/styled';
import { scrollBarStyles } from 'global/styles';

export const StyledPlansContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  overflow: auto;
  padding: 32px 0;
  height: 100%;
  grid-auto-columns: 1fr;
  ${scrollBarStyles}
`;
