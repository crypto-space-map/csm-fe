import moment from 'moment';

import { CompanyInfo, PostDate, TitleSection, Icon, TitleTextContent } from './styles';
import { CompanyProps } from './types';

interface HeaderProps {
  company: CompanyProps;
  postDate?: string;
}

export const Header = ({ company, postDate }: HeaderProps) => {
  const { title, link, logo, linkText } = company;
  return (
    <TitleSection>
      <CompanyInfo>
        <Icon src={logo} alt="logo" />
        <TitleTextContent>
          <h5>{title}</h5>
          <a href={link} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        </TitleTextContent>
      </CompanyInfo>
      {postDate && <PostDate>{moment(postDate).format('DD MMMM YYYY')}</PostDate>}
    </TitleSection>
  );
};

Header.defaultProps = {
  postDate: '',
};
