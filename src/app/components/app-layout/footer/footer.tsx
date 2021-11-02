import { SocialPanel } from './ social-panel';
import { LinksPanel } from './links-panel';
import { StyledFooter } from './styled';

export const Footer = () => (
  <StyledFooter>
    <LinksPanel />
    <span />
    <SocialPanel />
  </StyledFooter>
);
