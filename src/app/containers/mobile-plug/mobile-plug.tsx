import { socialPanelLinks } from '@global-constants/links';

import { MainLogo } from 'assets/images';

import {
  CenterContainer,
  GrayText,
  MobilePlugContainer,
  Text,
  StyledSocial,
  StyledLink,
  MailLink,
} from './styled';

export const MobilePlug = () => (
  <MobilePlugContainer>
    <MainLogo />
    <CenterContainer>
      <Text>Please, use bigger screen</Text>
      <GrayText>For now CSM works better on bigger screens, so please use them.</GrayText>
      <GrayText>We working on our mobile version.</GrayText>
    </CenterContainer>
    <Text>Stay tunned</Text>
    <StyledSocial>
      {socialPanelLinks.map(({ icon: Icon, href, title }) => (
        <StyledLink href={href} target="_blank" rel="noopener noreferrer" key={title}>
          <Icon />
        </StyledLink>
      ))}
    </StyledSocial>
    <Text>Contacts</Text>
    <MailLink href="mailto:cryptospacemap@gmail.com">Cryptospacemap@gmail.com</MailLink>
  </MobilePlugContainer>
);
