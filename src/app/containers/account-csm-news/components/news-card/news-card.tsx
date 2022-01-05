import { AccordionDetails } from '@mui/material';

import { AccountDataContainer } from 'app/components/account';
import { useBooleanState } from 'hooks';

import { CSMNewsProps } from '../../types';
import { ShowNewsButton } from './show-news-button';
import {
  ContentContainer,
  NewsHeader,
  NewsImage,
  NewsText,
  StyledAccordion,
  StyledNewsCard,
} from './styled';

export const NewsCard = ({ img, header, text, open = false }: CSMNewsProps) => {
  const [isOpen, setOpen, setClose] = useBooleanState(open);
  const handleClick = () => (isOpen ? setClose() : setOpen());

  return (
    <AccountDataContainer invert>
      <StyledNewsCard isOpen={isOpen as boolean}>
        <span>
          <NewsHeader>{header}</NewsHeader>
          <ShowNewsButton isOpen={isOpen} onClick={handleClick} />
        </span>
        <StyledAccordion expanded={isOpen}>
          <AccordionDetails />
          <ContentContainer>
            {img && <NewsImage src={img} alt={header} />}
            <NewsText>{text}</NewsText>
          </ContentContainer>
        </StyledAccordion>
      </StyledNewsCard>
    </AccountDataContainer>
  );
};
