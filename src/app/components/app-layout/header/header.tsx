import { MainLogo } from './header-logo';
import { HeaderInput } from './input';
import { StyledHeader } from './styled';
import { HeaderUserBlock } from './user-block';

export const Header = () => (
  <StyledHeader>
    <MainLogo />
    <HeaderInput />
    <HeaderUserBlock
      haveUnreadMessages
      avatarSrc="https://i.pinimg.com/736x/e2/2a/da/e22ada859cdcfde86fa199dd0f2404e5.jpg"
    />
  </StyledHeader>
);
