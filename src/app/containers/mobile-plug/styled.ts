import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { Link } from 'react-router-dom';

export const MobilePlugContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(16.74deg, #242424 83.92%, #85e2ff 100%);
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

export const GrayText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_GRAY};
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  padding: 30px;
`;

export const StyledSocial = styled.div`
  padding: 24px;
`;

export const StyledLink = styled.a`
  & > svg {
    transform: scale(1.5);
    padding: 0 1em;
  }
`;

export const MailLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #83d9f5;
  padding: 24px;
`;
