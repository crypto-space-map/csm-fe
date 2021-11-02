import { socialPanelLinks } from '@global-constants/links';

import { IconLink } from './icon-link';
import { StyledSocialPanel } from './styled';

export const SocialPanel = () => (
  <StyledSocialPanel>
    {socialPanelLinks.map(item => (
      <IconLink key={item.title} {...item} />
    ))}
  </StyledSocialPanel>
);
