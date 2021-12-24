import { useState } from 'react';

import { AccordionDetails } from '@mui/material';

import { AccountDataContainer } from 'app/components/account';

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

export const NewsCard = ({ img, header, text }: CSMNewsProps) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  return (
    <AccountDataContainer invert>
      <StyledNewsCard isOpen={isOpen}>
        <span>
          <NewsHeader>{header}</NewsHeader>
          <ShowNewsButton isOpen={isOpen} onClick={handleOpen} />
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
