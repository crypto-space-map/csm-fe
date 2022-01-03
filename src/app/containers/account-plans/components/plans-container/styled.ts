import styled from '@emotion/styled';
import { scrollBarStyles } from 'global/styles';

export const StyledPlansContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  overflow: hidden;
  padding: 32px 0;
  height: fit-content;
  grid-auto-columns: auto;
  width: max-content;
  ${scrollBarStyles}
  & > :nth-of-type(1) {
    padding-left: 0;
  }
`;

export const PlansContainerWrapper = styled.div`
  width: 100%;
  overflow: auto;
  ${scrollBarStyles}
`;
