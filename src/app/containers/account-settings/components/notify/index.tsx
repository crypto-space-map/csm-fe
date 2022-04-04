import { CheckBox } from 'common/components';

import { SettingsBlockWrapper, SettingsTitle } from '../../styled';
import { NotifySettingsWrapper } from '../notification-settings/styled';

const channels = ['Telegram', 'E-mail'];

export const NotifyVia = () => (
  <SettingsBlockWrapper>
    <SettingsTitle>Notify via</SettingsTitle>
    <NotifySettingsWrapper>
      {channels.map(item => (
        <CheckBox label={item} key={item} />
      ))}
    </NotifySettingsWrapper>
  </SettingsBlockWrapper>
);
