import { ContainerOverflow } from 'app/containers/account/components/action-block/styled';

import { newsMockData } from '../../mock-data';
import { NewsCard } from '../news-card/news-card';
import { StyledNewsContainer } from './styled';

export const AccountNewsContainer = () => (
  <StyledNewsContainer>
    <ContainerOverflow>
      {newsMockData.map((item, i) => (
        <NewsCard key={item.header} {...item} open={i === 0} />
      ))}
    </ContainerOverflow>
  </StyledNewsContainer>
);
