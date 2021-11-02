import { socialPanelLinks } from '@global-constants/links';
import { Link, Tooltip } from '@mui/material';

export const IconLink = ({ icon: Icon, title, ...restProps }: typeof socialPanelLinks[number]) => (
  <Tooltip title={title}>
    <Link {...restProps}>
      <Icon />
    </Link>
  </Tooltip>
);
