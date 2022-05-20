import { CheckBox } from 'common/components';

import { SettingsTitle } from '../../styled';
import { NotifySettingsWrapper } from './styled';

const alerts = [
  'New funds in favorite projects',
  'New partnerships for favorite projects',
  'New listings in favorite projects',
];

export const NotificationSettings = () => (
  <NotifySettingsWrapper>
    <SettingsTitle>Notification Settings</SettingsTitle>
    <NotifySettingsWrapper>
      {alerts.map(item => (
        <CheckBox label={item} key={item} />
      ))}
    </NotifySettingsWrapper>
  </NotifySettingsWrapper>
);
