import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const SettingsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
`;

export const SettingsTitle = styled.span`
  margin-bottom: 38px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

export const SettingsBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
