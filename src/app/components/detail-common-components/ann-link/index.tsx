import LinkIcon from 'assets/link.svg';
import { cutLink } from 'utils/detail-info';

import { StyledAnnLink } from './styles';

interface AnnLinkProps {
  link: string;
  width?: number;
}

export const AnnLink = ({ link, width = 155 }: AnnLinkProps) => (
  <StyledAnnLink target="_blank" href={link} width={width}>
    <div>
      <LinkIcon />
    </div>
    <span>{cutLink(link)}</span>
  </StyledAnnLink>
);

AnnLink.defaultProps = {
  width: 155,
};
