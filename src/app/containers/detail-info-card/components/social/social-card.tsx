import { SocialCardWrapper, TitleWrapper, Icon, TitleTextContent } from './styles';

interface SocialCardProps {
  title: string;
  linkTitle: string;
  companyLogoHref: string;
  link: string;
  text: string;
}
export const SocialCard = ({ title, linkTitle, companyLogoHref, link, text }: SocialCardProps) => (
  <SocialCardWrapper>
    <TitleWrapper>
      <Icon src={companyLogoHref} alt="logo" />
      <TitleTextContent>
        <h5>{title}</h5>
      </TitleTextContent>
    </TitleWrapper>
  </SocialCardWrapper>
);
