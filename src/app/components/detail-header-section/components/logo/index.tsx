import { IconPlug } from 'common/components';

import { Icon, StyledDefaultLogo } from './styles';

interface LogoProps {
  name: string;
  icon?: string;
}

export const Logo = ({ name, icon }: LogoProps) => {
  if (icon) return <Icon src={icon} alt="logo" />;

  return (
    <StyledDefaultLogo>
      <IconPlug text={name} />
    </StyledDefaultLogo>
  );
};

Logo.defaultProps = {
  icon: '',
};
