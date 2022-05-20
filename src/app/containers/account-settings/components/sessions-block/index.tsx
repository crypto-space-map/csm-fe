import { SettingsBlockWrapper, SettingsTitle } from '../../styled';
import { SessionRow, StyledSessionsBlock } from './styled';

const sessions = [
  {
    device: 'Mac OS (current)',
    date: new Date().toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }),
  },
  { device: 'iPhone 7', date: 'Today' },
  { device: 'Windows X', date: 'Yesterday' },
  { device: 'Mac OS', date: '1 may 2021' },
  { device: 'Windows X', date: '21 june 2021' },
];

export const SessionBlock = () => (
  <SettingsBlockWrapper>
    <SettingsTitle>Your Sessions</SettingsTitle>
    <StyledSessionsBlock>
      {sessions.map(item => (
        <SessionRow>
          <p>{item.device}</p> <p>{item.date}</p>
        </SessionRow>
      ))}
    </StyledSessionsBlock>
  </SettingsBlockWrapper>
);
