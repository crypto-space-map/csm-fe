import styled from '@emotion/styled';
import { Accordion, Button } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledNewsCard = styled.div<{ isOpen: boolean }>`
  display: grid;
  gap: ${({ isOpen }) => (isOpen ? '16px' : 0)};
  width: 100%;
  align-items: flex-start;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  transition: 0.2s linear;
`;

export const StyledShowNewsButton = styled(Button)<{ isOpen?: boolean }>`
  display: flex;
  gap: 8px;
  width: max-content;
  color: ${COLOR_PALLETTE.DARK_GREEN};
  text-transform: capitalize;
  font-weight: 300;
  & > svg {
    transition: 0.2s linear;
    transform: ${({ isOpen = false }) => isOpen && 'rotate(180deg)'};
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  gap: 16px;
`;

export const NewsHeader = styled.span`
  font-weight: bold;
`;

export const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const NewsText = styled.span`
  color: ${COLOR_PALLETTE.MAIN_BLACK};
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
`;

export const StyledAccordion = styled(Accordion)`
  box-shadow: none;
  padding: 0;
  & > .MuiAccordionDetails-root {
    padding: 0;
  }
`;
