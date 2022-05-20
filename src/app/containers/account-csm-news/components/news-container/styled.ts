import styled from '@emotion/styled';
import { scrollBarStyles } from 'global/styles';

export const StyledNewsContainer = styled.div`
  display: grid;
  gap: 6px;
  padding: 32px 0;
  height: 100%;
  overflow: auto;
  max-width: 740px;
  ${scrollBarStyles}
`;
