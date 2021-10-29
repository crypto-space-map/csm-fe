import { footerLinks } from '@global-constants/links';

import { Link, StyledLinksPanel } from './styled';

export const LinksPanel = () => (
  <StyledLinksPanel>
    {footerLinks.map(({ href, title }) => (
      <Link href={href} key={title}>
        {title}
      </Link>
    ))}
  </StyledLinksPanel>
);
