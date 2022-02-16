import LinkIcon from 'assets/link.svg';
import { cutLink } from 'utils/detail-info';

import { StyledAnnLink } from './styles';

interface AnnLinkProps {
  link: string;
}

export const AnnLink = ({ link }: AnnLinkProps) => (
  <StyledAnnLink target="_blank" href={link}>
    <div>
      <LinkIcon />
    </div>
    <span>{cutLink(link)}</span>
  </StyledAnnLink>
);
