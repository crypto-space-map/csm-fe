import { PencilIcon } from 'assets';
import { IconButton, Input, SVGWrapper } from 'common/components';

import { SettingsBlockWrapper, SettingsTitle } from '../../styled';
import { SettingsFieldsWrapper, SettingsFieldWrapper } from './styled';

const fields = ['Login', 'Nickname', 'Password', '@Telegram', 'Phone Number'];

export const ProfileSettings = () => (
  <SettingsBlockWrapper>
    <SettingsTitle>Profile Settings</SettingsTitle>
    <SettingsFieldsWrapper>
      {fields.map(item => (
        <SettingsFieldWrapper key={item}>
          <Input label={item} fullWidth />
          <IconButton variant="text">
            <SVGWrapper fill="#BDBDBD">
              <PencilIcon />
            </SVGWrapper>
          </IconButton>
        </SettingsFieldWrapper>
      ))}
    </SettingsFieldsWrapper>
  </SettingsBlockWrapper>
);
