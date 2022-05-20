import { AccountDataContainer } from 'app/components/account';

import { Avatar, RefferalDate, UserDataContainer } from './styled';

export const RefferalCard = ({ email = '', registerDate = '' }) => (
  <AccountDataContainer invert>
    <UserDataContainer>
      <Avatar>A</Avatar>
      {email}
    </UserDataContainer>
    <RefferalDate>
      Register Date<span>{registerDate}</span>
    </RefferalDate>
  </AccountDataContainer>
);
